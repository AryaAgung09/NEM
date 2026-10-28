"use client";

import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import type { FeatureCollection } from "geojson";
import type { homepageCopy } from "@/data/homepage";
import styles from "./home.module.css";

type Site = (typeof homepageCopy)["id"]["operations"]["sites"][number];

type OperationsMapCanvasProps = {
  fallbackTitle: string;
  fallbackDescription: string;
  sites: Site[];
  selectedIndex: number;
  onSelect: (index: number) => void;
};

const geographyUrl =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson";

function isFeatureCollection(value: unknown): value is FeatureCollection {
  return (
    typeof value === "object" &&
    value !== null &&
    "type" in value &&
    value.type === "FeatureCollection" &&
    "features" in value &&
    Array.isArray(value.features) &&
    value.features.every(
      (feature) =>
        typeof feature === "object" &&
        feature !== null &&
        "type" in feature &&
        feature.type === "Feature" &&
        "geometry" in feature &&
        "properties" in feature,
    )
  );
}

export function OperationsMapCanvas({
  fallbackTitle,
  fallbackDescription,
  sites,
  selectedIndex,
  onSelect,
}: OperationsMapCanvasProps) {
  const [geographies, setGeographies] = useState<FeatureCollection | null>(
    null,
  );
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadGeographies() {
      try {
        const response = await fetch(geographyUrl, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error(
            `Map data request failed with status ${response.status}`,
          );
        }

        const data: unknown = await response.json();
        if (!isFeatureCollection(data)) {
          throw new Error("Map data did not contain a valid GeoJSON collection");
        }

        setGeographies(data);
      } catch {
        if (!controller.signal.aborted) setHasError(true);
      }
    }

    void loadGeographies();
    return () => controller.abort();
  }, []);

  const selectedSite = sites[selectedIndex];

  if (!geographies && !hasError) {
    return (
      <div className={styles.mapLoading} role="status">
        <span className={styles.mapLoadingPulse} />
      </div>
    );
  }

  if (hasError || !geographies) {
    return (
      <div className={styles.mapFallback}>
        <div className={styles.mapFallbackIllustration} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <i />
        </div>
        <div className={styles.mapFallbackCopy}>
          <h3>{fallbackTitle}</h3>
          <p role="status">{fallbackDescription}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.mapCanvas}>
      <ComposableMap
        aria-label={fallbackTitle}
        className={styles.mapSvg}
        width={1000}
        height={500}
        projection="geoMercator"
        projectionConfig={{ center: [118, -2], scale: 850 }}
      >
        <Geographies geography={geographies}>
          {({ geographies: mapGeographies }) =>
            mapGeographies.map((geography) => {
              const properties = geography.properties as Record<
                string,
                unknown
              >;
              const name =
                properties.name ?? properties.NAME ?? properties.ADMIN;
              const isIndonesia = name === "Indonesia";

              return (
                <Geography
                  geography={geography}
                  key={geography.rsmKey}
                  className={
                    isIndonesia
                      ? styles.mapIndonesia
                      : styles.mapLand
                  }
                />
              );
            })
          }
        </Geographies>
        {sites.map((site, index) => (
          <Marker
            coordinates={site.coordinates}
            key={site.project}
            className={styles.mapMarker}
            onClick={() => onSelect(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(index);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`${site.name}: ${site.project}`}
          >
            <circle className={styles.mapMarkerPulse} r={13} />
            <circle
              className={
                index === selectedIndex
                  ? styles.mapMarkerActive
                  : styles.mapMarkerDot
              }
              r={5}
            />
          </Marker>
        ))}
      </ComposableMap>

      <div className={styles.mapProjectCard} aria-live="polite">
        <span className={styles.mapProjectEyebrow}>{selectedSite.name}</span>
        <h3>{selectedSite.project}</h3>
        <p>{selectedSite.description}</p>
        <span className={styles.mapProjectNumber}>
          0{selectedIndex + 1} / 0{sites.length}
        </span>
      </div>
      <span className={styles.mapCaption}>{fallbackTitle}</span>
    </div>
  );
}

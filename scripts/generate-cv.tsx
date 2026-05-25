import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import { CVDocument } from "../components/cv/cv-document";
import path from "path";

const outputPath = path.join(__dirname, "../public/rafal-golab-cv.pdf");

async function main() {
  console.log("Generating CV PDF...");
  await renderToFile(<CVDocument />, outputPath);
  console.log(`CV generated: ${outputPath}`);
}

main().catch((err) => {
  console.error("Failed to generate CV:", err);
  process.exit(1);
});

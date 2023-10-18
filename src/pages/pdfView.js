import React from "react";
import {
  PDFDownloadLink,
  PDFViewer,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import PdfFile from "@/components/PdfFile";

const PdfView = () => {
  return (
    <div>
      <PdfFile/>
    </div>
  );
};


export default PdfView;

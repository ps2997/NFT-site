import React, { useState } from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import QrScanner from "qr-scanner";
import "../styles/pages/scanner.css";

export const Scanner = () => {
  const [inputValue, setInputValue] = useState(" ");
  const [result, setResult] = useState(" ");

  const download = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");

      downloadLink.download = `${inputValue}`;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  const readCode = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    QrScanner.scanImage(file, { returnDetailedScanResult: true })
      .then((result) => setResult(result.data))
      .catch((e) => console.log(e));
  };

  return (
    <motion.div
      className="main-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="qr-generate">
        <h2>QR Code Generator and Downloader: </h2>
        <input
          className="input-box"
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
        ></input>

        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 64,
            width: "100%",
          }}
        >
          <QRCode
            className="qrCode-display"
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={inputValue}
            viewBox={`0 0 256 256`}
            id="QRCode"
          />
        </div>

        <input
          className="Download-btn"
          type="button"
          onClick={download}
          value="Download"
        ></input>
      </div>

      <div className="qr-reader">
        <h2>QR Code reader:</h2>

        <input type="file" onChange={(e) => readCode(e)}></input>

        <p>
          Result is <b>{result}</b>
        </p>
      </div>
    </motion.div>
  );
};

export default Scanner;

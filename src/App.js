import React, { useState, useEffect, useRef } from "react";
import "./index.css";

function SpeechToText() {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [supported, setSupported] = useState(true);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptPiece = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcriptPiece + " ";
        } else {
          interimTranscript += transcriptPiece;
        }
      }
      setTranscript(finalTranscript + interimTranscript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = () => {
      if (listening) recognition.start();
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
      recognition.onend = null;
    };
  }, []);

  useEffect(() => {
    if (!recognitionRef.current) return;

    if (listening) {
      recognitionRef.current.start();
    } else {
      recognitionRef.current.stop();
    }
  }, [listening]); // <-- Add listening here to fix the ESLint warning

  const toggleListening = () => setListening((prev) => !prev);
  const clearTranscript = () => setTranscript("");

  if (!supported)
    return (
      <div className="container speech-to-text-container unsupported">
        <h2>😞 Your browser does not support Speech Recognition.</h2>
        <p>Please use Chrome, Edge, or another compatible browser.</p>
      </div>
    );

  return (
    <div className="container speech-to-text-container">
      <h1 className="mb-4 text-center">Speech to Text Converter</h1>

      <div className="controls text-center mb-4">
        <button
          className={`btn btn-listen ${listening ? "listening" : ""}`}
          onClick={toggleListening}
          aria-pressed={listening}
          aria-label={listening ? "Stop Listening" : "Start Listening"}
        >
          {listening ? (
            <>
              <span className="mic-icon" role="img" aria-hidden="true">
                🎤
              </span>{" "}
              Stop Listening
            </>
          ) : (
            <>
              <span className="mic-icon" role="img" aria-hidden="true">
                🎙️
              </span>{" "}
              Start Listening
            </>
          )}
        </button>

        <button
          className="btn btn-clear"
          onClick={clearTranscript}
          disabled={!transcript.trim()}
          aria-disabled={!transcript.trim()}
          aria-label="Clear Transcript"
          title="Clear transcript"
        >
          Clear
        </button>
      </div>

      <div
        className="transcript-box"
        role="textbox"
        aria-live="polite"
        aria-label="Speech transcript"
        tabIndex={0}
      >
        {transcript || "Your speech will appear here..."}
      </div>
    </div>
  );
}

export default SpeechToText;

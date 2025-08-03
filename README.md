# 🎙️ Speech to Text React App

A **simple and elegant React application** that converts your speech to text in real-time using the Web Speech API's `SpeechRecognition` interface.

---

## ✨ Features

- 🎤 Real-time speech recognition & transcription
- 🔄 Continuous listening with interim & final results
- ▶️ Start / ⏸️ Stop listening toggle button
- 🗑️ Clear transcript button
- ♿ Accessible and user-friendly interface
- 🚫 Graceful fallback for unsupported browsers

---

## 🛠️ Technologies Used

- React (Functional Components & Hooks)
- Web Speech API (`SpeechRecognition`)
- CSS for styling

---

<h2>🚀 Demo</h2>
<div style="text-align: center;">
  <img
    src="./public/preview.png"
    alt="Speech to Text React App Output"
    width="600"
    style="border: 3px solid #000; border-radius: 8px;"
  />
</div>







## 🚀 Getting Started

### Prerequisites

- Node.js (v12 or higher recommended)
- Modern browser with Web Speech API support (Chrome, Edge, etc.)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/speech-to-text-react.git
cd speech-to-text-react

# Install dependencies📝 Usage
Click Start Listening 🎙️ to begin speech recognition.

Speak clearly into your microphone.

Watch your words appear live in the transcript box.

Click Stop Listening 🎤 to pause.

Use Clear 🗑️ to reset the transcript.

♿ Accessibility
Buttons include meaningful aria-label and aria-pressed attributes.

Transcript area uses aria-live="polite" for real-time screen reader updates.

🌐 Browser Support
Uses window.SpeechRecognition or window.webkitSpeechRecognition.

If unsupported, shows a friendly message recommending Chrome, Edge, or compatible browsers.

💡 Code Highlights
Utilizes React hooks (useState, useEffect, useRef) to manage speech recognition lifecycle.

Separates interim and final transcripts for smooth user feedback.

Automatically restarts speech recognition on unexpected stop events.

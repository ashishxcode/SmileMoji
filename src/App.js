import React, { useState } from "react";
import "./styles.css";

const emojiDistinory = {
  "😀": "Grinning Face",
  "😃": "Smiling Face With Open Mouth",
  "😄": "Smiling Face With Open Mouth And Smiling Eyes",
  "😁": "Grinning Face With Smiling Eyes",
  "😆": "Smiling Face With Open Mouth And Closed Eyes",
  "😅": "Smiling Face With Open Mouth & Cold Sweat",
  "😂": "Face With Tears of Joy",
  "🤣": "Rolling On The Floor, Laughing",
  "😳": "Flushed Face",
  "😊": "Smiling Face With Smiling Eyes",
  "😇": "Smiling Face With Halo",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😌": "Relieved Face",
  "😍": "Smiling Face With Heart-Eyes",
  "🥰": "Smiling face with smiling eyes and three hearts",
  "😘": "Face Throwing a Kiss",
  "😗": "Kissing Face",
  "😙": "Kissing Face With Smiling Eyes",
  "😚": "Kissing Face With Closed Eyes",
  "😋": "Face Savouring Delicious Food",
  "😛": "Face With Stuck-Out Tongue",
  "😝": "Face With Stuck-Out Tongue & Tightly Closed Eyes",
  "😜": "Face With Stuck-Out Tongue & Winking Eye",
  "🤪": "Crazy Face",
  "🤨": "Face With a Raised Eyebrow",
  "🧐": "Face With Monocle",
  "🤓": "Nerd Face",
  "😎": "Face With Sunglasses",
  "🤩": "Smirking Face With Starry Eyes",
  "🥳": "Face with party blower and party hat"
};

const emojiList = Object.keys(emojiDistinory);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEventHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDistinory[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! This emoji is not availabel in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDistinory[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav className="navigation">
        <h1>SmileMoji</h1>
      </nav>
      <input placeholder="Write emoji here" onChange={inputEventHandler} />
      <div>{meaning}</div>
      <p> Smileys i know</p>
      {emojiList.map((item) => {
        return (
          <span
            className="emojiSpan"
            key={item}
            onClick={() => emojiClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

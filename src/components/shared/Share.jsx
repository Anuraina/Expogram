import "./share.css";
import { PermMedia, Label, EmojiEmotions, Room } from "@material-ui/icons";
export default function Share() {
  return (
    <div className="shared">
      <div className="sharedWrapper">
        <div className="sharedTop">
          <img
            src="/assets/person/1.jpeg"
            alt="profileImg"
            className="sharedProfileImg"
          />
          <input
            placeholder="What's in your mind ?"
            className="sharedInput"
          />
        </div>
        <hr className="sharedHr" />
        <div className="sharedBottom">
          <div className="sharedOptions">
            <div className="sharedOption">
              <PermMedia htmlColor="tomato" className="sharedIcon" />
              <span className="sharedOptionText">Photo or Video</span>
            </div>
            <div className="sharedOption">
              <Label htmlColor="blue" className="sharedIcon" />
              <span className="sharedOptionText">Tag</span>
            </div>
            <div className="sharedOption">
              <Room htmlColor="green" className="sharedIcon" />
              <span className="sharedOptionText">Location</span>
            </div>
            <div className="sharedOption">
              <EmojiEmotions htmlColor="goldenrod" className="sharedIcon" />
              <span className="sharedOptionText">Feelings</span>
            </div>
          </div>
          <button className="sharedButton">Share</button>
        </div>
      </div>
    </div>
  );
}

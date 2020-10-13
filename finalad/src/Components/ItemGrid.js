import React from "react";
import { Icon } from "react-icons-kit";
import { ic_favorite_border } from "react-icons-kit/md/ic_favorite_border";
import { ic_chat_bubble_outline } from "react-icons-kit/md/ic_chat_bubble_outline";
import "./ItemGrid.css";
import berry from "../assets/berryice.jpg";
import choco from "../assets/choco.jpg";
import cones from "../assets/cones.jpg";
import iceberry from "../assets/iceberry.jpg";
import melt from "../assets/melt.jpg";
import mint from "../assets/mint.JPG";
import pops from "../assets/pops.jpg";
import teen from "../assets/teen.jpg";
import vanilla from "../assets/vanilla.jpg";

export default function itemgrid() {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="blog">
          <img src={choco} alt="choco" />
          <h3>Chocolate Confessions</h3>
          <div className="comment-likes">
            <div className="comments">
              <Icon className="icons" icon={ic_chat_bubble_outline} />
              <a href="/#" className="comments">
                12 Comments
              </a>
              <div>|</div>
              <Icon className="icons" icon={ic_favorite_border} />
              <a href="/#" className="likes">
                6 Likes
              </a>
            </div>
          </div>
          <a href="/#" className="myButton">
            LEARN MORE
          </a>
        </div>
        <div className="blog">
          <img src={cones} alt="cones" />
          <h3>Wholesome Waffers</h3>
          <div className="comment-likes">
            <div className="comments">
              <Icon className="icons" icon={ic_chat_bubble_outline} />
              <a href="/#" className="comments">
                11 Comments
              </a>
              <div>|</div>
              <Icon className="icons" icon={ic_favorite_border} />
              <a href="/#" className="likes">
                25 Likes
              </a>
            </div>
          </div>
          <a href="/#" className="myButton">
            LEARN MORE
          </a>
        </div>
        <div className="blog">
          <img src={iceberry} alt="iceberry" />
          <h3>Low Fat Goodness</h3>
          <div className="comment-likes">
            <div className="comments">
              <Icon className="icons" icon={ic_chat_bubble_outline} />
              <a href="/#" className="comments">
                4 Comments
              </a>
              <div>|</div>
              <Icon className="icons" icon={ic_favorite_border} />
              <a href="/#" className="likes">
                2 Likes
              </a>
            </div>
          </div>
          <a href="/#" className="myButton">
            LEARN MORE
          </a>
        </div>
        <div className="blog">
          <img src={mint} alt="mint" />
          <h3>Gem Mint</h3>
          <div className="comment-likes">
            <div className="comments">
              <Icon className="icons" icon={ic_chat_bubble_outline} />
              <a href="/#" className="comments">
                1 Comments
              </a>
              <div>|</div>
              <Icon className="icons" icon={ic_favorite_border} />
              <a href="/#" className="likes">
                5 Likes
              </a>
            </div>
          </div>
          <a href="/#" className="myButton">
            LEARN MORE
          </a>
        </div>
        <div className="blog">
          <img src={teen} alt="teen" />
          <h3>The Scoop</h3>
          <div className="comment-likes">
            <div className="comments">
              <Icon className="icons" icon={ic_chat_bubble_outline} />
              <a href="/#" className="comments">
                13 Comments
              </a>
              <div>|</div>
              <Icon className="icons" icon={ic_favorite_border} />
              <a href="/#" className="likes">
                22 Likes
              </a>
            </div>
          </div>
          <a href="/#" className="myButton">
            LEARN MORE
          </a>
        </div>
        <div className="blog">
          <img src={vanilla} alt="vanilla" />
          <h3>Vanilla Ice, Ice Baby</h3>
          <div className="comment-likes">
            <div className="comments">
              <Icon className="icons" icon={ic_chat_bubble_outline} />
              <a href="/#" className="comments">
                33 Comments
              </a>
              <div>|</div>
              <Icon className="icons" icon={ic_favorite_border} />
              <a href="/#" className="likes">
                31123 Likes
              </a>
            </div>
          </div>
          <a href="/#" className="myButton">
            LEARN MORE
          </a>
        </div>
        <div className="blog">
          <img src={pops} alt="pops" />
          <h3>Cake Popped</h3>
          <div className="comment-likes">
            <div className="comments">
              <Icon className="icons" icon={ic_chat_bubble_outline} />
              <a href="/#" className="comments">
                12 Comments
              </a>
              <div>|</div>
              <Icon className="icons" icon={ic_favorite_border} />
              <a href="/#" className="likes">
                1212 Likes
              </a>
            </div>
          </div>
          <a href="/#" className="myButton">
            LEARN MORE
          </a>
        </div>
        <div className="blog">
          <img src={berry} alt="berry" />
          <h3>Melange a Trois</h3>
          <div className="comment-likes">
            <div className="comments">
              <Icon className="icons" icon={ic_chat_bubble_outline} />
              <a href="/#" className="comments">
                5 Comments
              </a>
              <div>|</div>
              <Icon className="icons" icon={ic_favorite_border} />
              <a href="/#" className="likes">
                23 Likes
              </a>
            </div>
          </div>
          <a href="/#" className="myButton">
            LEARN MORE
          </a>
        </div>
        <div className="blog">
          <img src={melt} alt="melt" />
          <h3>Summer Remedies</h3>
          <div className="comment-likes">
            <div className="comments">
              <Icon className="icons" icon={ic_chat_bubble_outline} />
              <a href="/#" className="comments">
                22 Comments
              </a>
              <div>|</div>
              <Icon className="icons" icon={ic_favorite_border} />
              <a href="/#" className="likes">
                51 Likes
              </a>
            </div>
          </div>
          <a href="/#" className="myButton">
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}

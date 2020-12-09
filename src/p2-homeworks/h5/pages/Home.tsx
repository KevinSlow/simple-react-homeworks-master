import React from "react";
import HW1 from "../../h1/HW1";
import HW2 from "../../h2/HW2";
import HW3 from "../../h3/HW3";
import HW4 from "../../h4/HW4";

function Home() {
    return (
        <div>

            <img className={"imgG"} sizes="(max-width: 540px) 100vw, 540px" srcSet="https://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=135&amp;h=135&amp;fit=crop 135w,
https://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=270&amp;h=270&amp;fit=crop 270w,
https://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=540&amp;h=540&amp;fit=crop 540w,
https://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=810&amp;h=810&amp;fit=crop 810w"
                 src="https://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=540&amp;h=540&amp;fit=crop"
                 alt="A brass instrument with lots of twists and turns" loading="lazy"
                 style={{margin: "auto", display: "block"}}/>


        </div>
    );
}

export default Home;

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз
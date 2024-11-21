import "./App.css";
import Item from "./components/Item";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Item
          backgroundUrl="https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg"
          title="Dota 2"
          description="Dota 2 is a multiplayer online battle arena by Valve. The game is a
          sequel to Defense of the Ancients, which was a community-created mod
          for Blizzard Entertainment's Warcraft III."
        />
        <Item
          backgroundUrl="https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg"
          title="RDR 2"
          description="RDR 2 is a multiplayer online battle arena by Valve. The game is
                a sequel to Defense of the Ancients, which was a
                community-created mod for Blizzard Entertainment's Warcraft III."
        />
        <Item
          backgroundUrl="https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg"
          title="The Witcher 3"
          description="The Witcher 3 is a multiplayer online battle arena by Valve. The
                game is a sequel to Defense of the Ancients, which was a
                community-created mod for Blizzard Entertainment's Warcraft III."
        />
        <Item
          backgroundUrl="https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg"
          title="PUBG Mobile"
          description="PUBG 2 is a multiplayer online battle arena by Valve. The game
                is a sequel to Defense of the Ancients, which was a
                community-created mod for Blizzard Entertainment's Warcraft III."
        />
        <Item
          backgroundUrl="https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
          title="Fortnite"
          description="Battle royale where 100 players fight to be the last person
                standing. which was a community-created mod for Blizzard
                Entertainment's Warcraft III."
        />
        <Item
          backgroundUrl="https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg"
          title="Far Cry 5"
          description=" Far Cry 5 is a 2018 first-person shooter game developed by
                Ubisoft. which was a community-created mod for Blizzard
                Entertainment's Warcraft III."
        />
        <Item
          backgroundUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7RFquH3dPl5c0jhKchYqcBc4LvYG67rPqIg&s"
          title="League of Legends"
          description="League of Legends is a multiplayer online battle arena by Riot. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
        />
      </Layout>
    </div>
  );
}

export default App;

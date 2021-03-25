import { useState } from "react";

import {
  Container,
  Divider,
  Form,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

import "../css/App.css";

import { FaCat } from "react-icons/fa";

import { returnImageFromChar } from "../data/ImageData";

const CREATOR_WEB_LINK = "https://millieboucher.myportfolio.com/";

function App() {
  const [userSentence, setUserSentence] = useState("");
  const [imageSize, setImageSize] = useState(
    window.screen.width < 650 ? 25 : 50
  );

  const handleInputChange = (event) => {
    // handle the input change
    setUserSentence(event.target.value.toLowerCase());
  };

  const handleImageSizeChange = (event, data) => {
    // handles the changing of the image size
    setImageSize(data.value);
  };

  return (
    <Container>
      <Divider hidden />
      <Header as="h1">
        <FaCat size={50} style={{ margin: "3 5" }} />
        <Header.Content>
          TypeInCat
          <Header.Subheader>
            Create cat sentences using the art created by{" "}
            <a href={CREATOR_WEB_LINK}>Millie Boucher</a>
          </Header.Subheader>
        </Header.Content>
      </Header>
      <Form>
        <Form.Group>
          <Form.Input
            width={12}
            value={userSentence}
            onChange={handleInputChange}
            placeholder="Type here..."
            icon={{ name: "paw", circular: true }}
            fluid
            label="Your sentence"
          />
          <Form.Dropdown
            fluid
            width={4}
            label="Image Size"
            selection
            options={[
              { key: "mini", value: 25, text: "Mini" },
              { key: "tiny", value: 50, text: "Tiny" },
              { key: "small", value: 75, text: "Small" },
              { key: "medium", value: 100, text: "Medium" },
            ]}
            onChange={handleImageSizeChange}
            defaultValue={imageSize}
          />
        </Form.Group>
      </Form>
      <Divider />
      <Segment basic>
        <Image.Group>
          {userSentence.split("").map((letter) => {
            if (letter === " ") {
              return <br />;
            } else {
              return (
                <Image
                  style={{ width: imageSize }}
                  src={returnImageFromChar(letter.toLocaleLowerCase())}
                />
              );
            }
          })}
        </Image.Group>
      </Segment>
    </Container>
  );
}

export default App;

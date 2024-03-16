import "../public/styles/desc.css";
import Box from "@material-ui/core/Box";

const Desc = () => {
  return (
    <div style={{ width: "100%", marginTop: "20vh", marginBottom: "50px" }}>
      <Box display="flex" justifyContent="center">
        <div className="headline">
          <h1
            className="sha"
            style={{
              fontSize: "3rem",
              letterSpacing: "-1px",
              color: "#AFAFAF",
            }}
          >
            <span
              className="txt-rotate"
              data-period={1000}
              data-rotate='[ "Hello, I am Erkin", "Hallo, ich bin Erkin","Hola, soy Erkin","我是Erkin","Ciao, sono Erkin","Bonjour, je suis Erkin","Hej, jag är Erkin","Merhaba, ben Erkin"]'
            />
          </h1>
        </div>
      </Box>
    </div>
  );
};

export default Desc;

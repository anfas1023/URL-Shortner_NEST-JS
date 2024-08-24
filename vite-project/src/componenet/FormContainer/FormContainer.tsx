import axios from "axios";
import * as React from "react";

interface IFormCOntainerProps {}

const FormContainer: React.FunctionComponent<IFormCOntainerProps> = () => {
  const [inputState, setInputState] = React.useState<string>();
  const handleSubmitUrl = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const data = {
        fullUrl: inputState,
        userId: "66c5b21ad18640e0cb22c875",
      };

      console.log("data", data);

      const response = await axios.post(
        "http://localhost:3000/shotner/createShotner",
        data,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log("URL shortened successfully:", response.data);
      } else {
        console.log("Unexpected response:", response);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error in Axios request:",
          error.response?.data || error.message
        );
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };
  return (
    <>
      <div className="container mx-auto p-2">
        <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
          <div className="w-full h-full rounded-xl p-20 backdrop-brightness-150">
            <h2 className="text-white text-4xl text-center  pb-4">
              URL Shotner
            </h2>
            <p className="text-white text-center pb-2 text-xl font-extralight">
              Paste Your Link To Shoten It.
            </p>
            <p className="text-white text-center pb-4 text-sm font-extralight">
              This is easy tool Use This Url Shotner To shoten You Larger
              Link.so it make It look like to more Neatly and cleanly.
            </p>
            <form>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <div className="m-3">
                    <input
                      className="w-full px-4 py-2 rounded-lg"
                      placeholder="Add your link"
                      required
                      type="text"
                      onChange={(e) => setInputState(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  onClick={handleSubmitUrl}
                  className="text-black px-4 py-2 border-blue-700 rounded-lg bg-blue-600 opacity-90 hover:opacity-100 hover:bg-blue-500 transition duration-300"
                >
                  ShortenUrl
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormContainer;

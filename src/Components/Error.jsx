import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    return (
        <div style={{
            backgroundImage: "url('/e3.jpg')"
        }} id="error-page" className="bg-no-repeat bg-center bg-cover min-h-screen  flex flex-col items-center justify-center  ">
        <div className="shadow-2xl rounded-xl border-2 border-white  p-12">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">404</h1>
        <p className="text-2xl font-semibold text-center text-white">Sorry, an unexpected error has occurred.</p>
        <p className="text-4xl text-center font-bold mt-2 text-white">
          <i>{error.statusText || error.message}</i>
        </p>
        </div>
      </div>
    );
};

export default Error;
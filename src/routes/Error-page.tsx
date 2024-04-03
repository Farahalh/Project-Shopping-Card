import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
  // might add other properties to the error object
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError; // explicitly typed as RouteError
  console.error(error);

  return (
    <div id="error-page" className="container p-8">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="py-8">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

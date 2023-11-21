import { useRouteError } from "react-router-dom";
import { RouteError } from "../types/interfaces";

export default function ErrorPage() {
    const error = useRouteError();

    if (typeof error === "object" && error !== null) {
        const typedError: RouteError = error as RouteError;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{typedError.status}</i>
            </p>
            <p>
                <i> {typedError.statusText}</i>
            </p>
        </div>
    );
}
}
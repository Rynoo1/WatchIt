import React from "react";
import { Button } from 'react-bootstrap'

function ErrorCard(props) {
    const handleHome = () => {
        window.location = "/"
    }

    const handleRefresh = () => {
        window.location.reload(false);
    }
    return (
        <>
            <div className="backgblue vh-100" >
                <h1 className="pt-5 accent display-2 condensed mb-4"> It seems an error has occured :/</h1>
                <h1 className="display-2 pt-2 mb-5 roboto accent"> Error {props.code} - {props.message} </h1>
                <Button className="me-2 mb-5" variant="err" onClick={handleHome} > Back to Home </Button>
                <Button className="ms-2 mb-5" variant="err" onClick={handleRefresh} > Reload Page </Button>
            </div>
        </>
    )
}

export default ErrorCard;

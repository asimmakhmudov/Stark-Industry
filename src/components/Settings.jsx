import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Settings = (props) => {
    return (
        <div className='productBody'>
            <Card className='productPopUp'>
                    <Card.Title className='popupTitle'>Iron Settings<Button style={{borderRadius: "50%", background: "#4b0908", border: 'none', right: 10, top: 10, position: 'absolute'}} onClick={props.handleClose}>&#x78;</Button>{props.content}</Card.Title>
                    <Card.Body>
                        <Card.Text>
                            <p>Hi Iron</p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    );
};

export default Settings;

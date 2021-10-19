import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQs = () => {
    return (
        <div id='faqs' className='my-5'>
            <h1 className='my-5'>Frequently Asked Questions</h1>
            <div className="row">

                <div className="col-md-6 mt-5 pt-5">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How do I get senior care home services when I need it?</Accordion.Header>
                            <Accordion.Body>
                                You can visit Senior Care Home during office hours. Appointments are appreciated, but walk-ins are welcome as well. If possible, please make a call ahead before visiting. This will allow us to arrange services and reduce your waiting time.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Does having home care result in a loss of independence?</Accordion.Header>
                            <Accordion.Body>
                                No. Our belief is that independence is being in control of your decisions. Having in-home care services means being in control of your activities and retaining as much independence as each situation allows. Many of our clients just need a little help to continue living a safe and productive life while some might be recovering from a fall or surgery, or other condition. Regardless of your situation, our goal is to enable you with the best possible outcome while being in control of your care and daily decisions.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How can I trust a
                                care-person in my home?</Accordion.Header>
                            <Accordion.Body>
                                We select our all doctors, nurses through a professional special screening implementing system. So, We assure you that we are more enough professional in our way.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What kind of services you give when senior are rehabitalized in your home</Accordion.Header>
                            <Accordion.Body>
                                All personal care what you need is allways available for your senior lover. Such as medication, recreation, safe and sound environment...
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="col-md-6">
                    <div>
                        <img className='w-100' src="https://i.ibb.co/Z6mQrV7/casual-woman-holding-green-question-mark.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
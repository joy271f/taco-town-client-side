import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FoodFAQ = () => {
    return (
        <Container className='my-5'>
            <h4 className='my-5 text-center text-danger'>Food FAQ</h4>
            <Accordion className='w-75 mx-auto' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What are food additives?</Accordion.Header>
                    <Accordion.Body>
                        A food ingredient is any substance that is added to a food to achieve a desired effect.  Direct food additives are used in foods to impart specific technological or functional qualities. For example, stabilizers are used to help prevent separation of nutrients in milk products, while phosphates are used as a leavening agent in baked goods. Indirect additives are not intentionally added to food, but may be present in trace amounts as a result of processing, packaging, shipping or storage. Both direct and indirect food additives are controlled by national regulatory authorities, such as the U.S. Food and Drug Administration.  Any food ingredient must be proven safe to be used in foods.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are food additives added to foods?</Accordion.Header>
                    <Accordion.Body>
                        <h6>Food additives are added to foods for several reasons:</h6>
                        <li>To provide or maintain nutritional benefits.</li>
                        <li>To maintain product quality and freshness</li>
                        <li>To prevent spoilage during transport, storage and sale.</li>
                        <li>To aid in the processing and preparation of foods.</li>
                        <li>To make foods more appealing and ensure that familiar foods have </li>
                        <li>consistent qualities.</li>
                        <li>To extend shelf-life and prevent food waste.</li>
                        <li>To make some foods more affordable.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Are food additives harmful to my health?</Accordion.Header>
                    <Accordion.Body>
                        Food safety is and always will be the primary objective for food ingredient manufacturers.  Before food additives can be added to foods, they must be reviewed and deemed safe for their intended use by either the Food and Drug Administration or a panel of experts. These experts examine studies and all scientific information related to a particular substance and must conclude that the substance is safe for its intended use. Many food additives actually help make foods safer and more enjoyable by ensuring they do not spoil in transport or storage, maintain desirable characteristics, and remain uniform from batch to batch.  Additives may also have beneficial health effects. For example, some food additives such as stabilizers and emulsifiers help ensure vitamins and nutrients do not separate out of a food or beverage.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How are food additives determined safe?</Accordion.Header>
                    <Accordion.Body>
                        Under current U.S. law, a food additive may be deemed safe for use in food in one of two ways. First, it may be declared “Generally Recognized As Safe,” for its intended use based on a review by qualified experts of the publicly available scientific data on the substance. FDA’s Generally Recognized as Safe (GRAS) Program is transparent, requiring information considered by the GRAS review panel to be publicly available. This process is rigorous; science based, and has a proven track-record of success and safety. Additionally, an additive may go through the food additive petition process, which requires FDA review of publicly and privately held information on the substance.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Where do food ingredients come from?</Accordion.Header>
                    <Accordion.Body>
                        Food ingredients, including food additives, are as varied in their source as in their function. Some food additives come from mineral sources that contain phosphorus compounds, which can be used to help foods retain moisture. Other additives come from plant sources like seaweed and kelp, which naturally produce compounds that can be used for thickening foods and maintaining texture. Another source of food ingredients is microbiological substances (e.g., probiotics), which are added to foods to improve digestive health. Additives may also come from crops like corn or from items that might be discarded like the rinds of citrus fruits.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default FoodFAQ;
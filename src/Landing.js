import React from 'react';
import TopSlider from './components/topslider';
import { Container } from 'react-bootstrap';

function Landing() {
    return (
        <>
        <TopSlider></TopSlider>
        <div className='backgprime'>
            <Container fluid className='px-5'>
                <h1 className='roboto'>About</h1>
                <div className='backgblue p-1'>
                    <p className='prime condensed'>Lorem ipsum dolor sit amet consectetur. Faucibus non ut turpis adipiscing orci mus enim. Aliquam placerat semper eget rhoncus. Sed tristique vel consectetur amet. Viverra lacinia eget scelerisque dictum. Duis amet eu tincidunt consequat gravida ipsum purus. Justo at imperdiet tincidunt lacinia. Pretium viverra ipsum orci vulputate enim tellus varius in et.</p>
                </div>

                <h3 className='accent pt-4'>Newest</h3>
                <div className='backgblue' style={{ height: "100px" }}>
                    <p className='white'> Expandable Slider </p>
                </div>

                <h3 className='accent pt-3'>Sale</h3>
                <div className='backgblue' style={{ height: "100px" }}>
                    <p className='white'> Expandable Slider </p>
                </div>

            </Container>
        </div>
        </>
    )
}

export default Landing
import React from 'react';
import DelSol from '../assets/images/image-del-sol.jpg';
import BTower from '../assets/images/image-228b.jpg';
import LePrototype from '../assets/images/image-prototype.jpg';
import '../Styling/homeBody.css';

const HomeBodyComponent = () => {
    const featuredTitles = ["Project Del Sol", "228B Tower", "Le Prototype"];
    const featuredImags = [DelSol, BTower, LePrototype];
    return (
        <div className='home-mobile-container'>
            <section className="image-one-container">
                <div className='opacityDiv'/>
                <div className='image-one-text'>
                    <h3 className='image-title'>Project Paramour</h3>
                    <p className='image-p'>Project made for an art museum near SouthWest London. Paramour is a statement of bold, 
                        modern architecture.
                    </p>
                </div>
                <div className='portfolio'>See Our Portfolio</div>
            </section>
            
            <section className='mobile-section-2'>
                <h3 className='mobile-section-2-header'>Welcome to <br/> Arch Studios</h3>
                <p className='mobile-section-2-para'>We have a unique network and skillset to help bring your projects to life. 
                    Our small team of highly skilled indivudals combined with our large network 
                    put us in a strong position to deliver exeptional results.
                </p>
                <p className='mobile-section-2-para'>Over the past 10 years, we have worked with we have worked on all kinds of projects. 
                    From stations to high-rise buildings, we create spaces that inspire and delight.
                </p>
                <p className='mobile-section-2-para'>We work closley with our clients so that we understand the intricacies of each project.
                    This allows us to work in harmony with the surrounding area to create truly stunning projects
                    that will stand the test of time. 
                </p>
            </section>

             <section className="mobile-section-3">
                <div className='image-one-text'>
                    <h3 className='image-title'>Small Team, <br/> Big Ideas</h3>
                </div>
                <div className='portfolio'>About Us</div>
            </section>
             <section className="mobile-section-3">
                <div className='image-one-text'>
                    <h3 className='image-title'>Featured</h3>
                </div>
                <div className='portfolio'>About Us</div>
                <>
                {featuredImags.map((img, idx) => {
                    return <div>
                        
                    </div>
                })}
                </>
            </section>
        </div>
    );
}

export default HomeBodyComponent;

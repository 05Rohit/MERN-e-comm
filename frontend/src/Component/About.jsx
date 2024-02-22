
import Resume from '../asset/MyResume.jpg'

const About = () => {
    return (
        <>
        <h1 className='text-3xl font-bold text-center'> Resume</h1>

        <div className="border-4 border-[#376FA2] m-5 ">
            <img src={Resume} alt='Resume' />


        </div>
            
        </>
    )
}

export default About

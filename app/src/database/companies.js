import { Subheading } from '../components/subheading'

export const Companies = [
    {
        companyName: "2Cubed",
        website: "https://2cubed.ie/",
        date: "March 2023 - Present",
        desc:
            <div>
                <Subheading className='pb-2'>Frontend Developer</Subheading>
                <ul className='list-disc'>
                    <li>Working with Vue.js and Nuxt.js to develop fully responsive websites.</li>
                    <li>Responsible for designing website componsents.</li>
                </ul>
            </div>
    },
    {
        companyName: "Omnipro",
        website: "https://omnipro.ie/",
        date: "June 2022 - December 2022",
        desc:
            <div>
                <Subheading className='pb-2'>Software Engineer</Subheading>
                <ul className='list-disc'>
                    <li>Responsible for creating web scraping algorithms (in python) to gather data for the marketing team.</li>
                    <li>Designed and developed the backend API’s for the company website and products.</li>
                    <li>Developed/Updated and designed features for the company website.</li>
                </ul>
            </div>
    },
]
/* eslint-disable no-redeclare */
import { InferGetStaticPropsType } from 'blitz'
import db from 'db'

import Typed from 'react-typed'

import Layout from 'app/layouts/FrontendLayout'

export async function getStaticProps() {
  const dbSkills = await db.skill.findMany({
    orderBy: {
      fromDate: 'desc',
    },
  })

  const skills = dbSkills.map((skill) => ({
    ...skill,
    fromDate: skill.fromDate.toString(),
    createdAt: skill.createdAt.toString(),
    updatedAt: skill.updatedAt.toString(),
  }))

  return {
    props: {
      skills,
    },
  }
}

const Home = ({ skills }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="min-h-screen bg-gray-900 grid">
      <section className={'py-16 px-8 container'}>
        <h1
          className={
            '-mx-4 max-w-6xl text-4xl lg:text-6xl leading-snug font-bold text-white space-x-4 cursor-default'
          }
        >
          <span className={'ml-4 mb-2 block'}>
            <Typed
              strings={['let&nbsp;', 'this.', '$', '$this->']}
              loop
              showCursor={false}
              typeSpeed={100}
              backSpeed={75}
              backDelay={5000}
              className={'text-gray-400'}
            />
            skills =
          </span>
          <span>[</span>
          {skills.map((skill, index) => (
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                skill.query || skill.name
              )}`}
              target="_blank"
              rel="noreferrer"
              tabIndex={0}
              className={'group inline-flex'}
              style={{
                color: skill.fill,
                WebkitTextDecorationColor: skill.stroke || skill.fill,
                textDecorationColor: skill.stroke || skill.fill,
                WebkitTextStroke: `1px ${skill.stroke}`,
              }}
              key={skill.id}
            >
              <span
                className={
                  'inline-block group-hover:underline transform group-hover:-translate-y-1 group-hover:scale-105 origin-bottom transition duration-150'
                }
              >
                &apos;{skill.name}&apos;
              </span>
              {index < skills.length - 1 ? <span className={'text-white'}>,</span> : null}
            </a>
          ))}
          <span>]</span>
        </h1>
      </section>
      <section className="py-16 bg-gray-700 text-white flex items-center">
        <div className="px-8 container flex flex-col items-start space-y-8">
          <article className="space-y-2">
            <h3 className="text-3xl font-bold">Email me</h3>
            <div className="p-4 bg-gray-800 inline-block text-3xl">
              me@casperengelmann.com
            </div>
          </article>
          <article className="space-y-2">
            <h3 className="text-3xl font-bold">Socials</h3>
            <div className="inline-flex space-x-8">
              <a
                href="#"
                className="transform hover:-translate-y-1 hover:scale-105 origin-bottom transition duration-150"
              >
                <svg
                  fill="currentColor"
                  width="100%"
                  height="100%"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                  className="w-12 lg:w-16 text-white hover:text-gray-400 transition duration-150"
                >
                  <g transform="matrix(0.080032,0,0,0.080032,-6.0104,-6.0064)">
                    <g>
                      <path d="M153.6,301.6C247.9,301.6 299.5,223.4 299.5,155.7C299.5,153.5 299.5,151.3 299.4,149.1C309.4,141.9 318.1,132.8 325,122.5C315.8,126.6 305.9,129.3 295.5,130.6C306.1,124.3 314.2,114.2 318.1,102.2C308.2,108.1 297.2,112.3 285.5,114.6C276.1,104.6 262.8,98.4 248.1,98.4C219.8,98.4 196.8,121.4 196.8,149.7C196.8,153.7 197.3,157.6 198.1,161.4C155.5,159.3 117.7,138.8 92.4,107.8C88,115.4 85.5,124.2 85.5,133.6C85.5,151.4 94.6,167.1 108.3,176.3C99.9,176 92,173.7 85.1,169.9L85.1,170.6C85.1,195.4 102.8,216.2 126.2,220.9C121.9,222.1 117.4,222.7 112.7,222.7C109.4,222.7 106.2,222.4 103.1,221.8C109.6,242.2 128.6,257 151,257.4C133.4,271.2 111.3,279.4 87.3,279.4C83.2,279.4 79.1,279.2 75.1,278.7C97.7,293.1 124.7,301.6 153.6,301.6"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="#"
                className="transform hover:-translate-y-1 hover:scale-105 origin-bottom transition duration-150"
              >
                <svg
                  fill="currentColor"
                  width="100%"
                  height="100%"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                  className="w-12 lg:w-16 text-white hover:text-gray-400 transition duration-150"
                >
                  <g transform="matrix(0.613892,0,0,0.613892,9.99908,19.8324)">
                    <path d="M0,-31.904C-8.995,-31.904 -16.288,-24.611 -16.288,-15.614C-16.288,-8.417 -11.621,-2.312 -5.148,-0.157C-4.333,-0.008 -4.036,-0.511 -4.036,-0.943C-4.036,-1.329 -4.05,-2.354 -4.058,-3.713C-8.589,-2.729 -9.545,-5.897 -9.545,-5.897C-10.286,-7.779 -11.354,-8.28 -11.354,-8.28C-12.833,-9.29 -11.242,-9.27 -11.242,-9.27C-9.607,-9.155 -8.747,-7.591 -8.747,-7.591C-7.294,-5.102 -4.934,-5.821 -4.006,-6.238C-3.858,-7.29 -3.438,-8.008 -2.972,-8.415C-6.589,-8.826 -10.392,-10.224 -10.392,-16.466C-10.392,-18.244 -9.757,-19.698 -8.715,-20.837C-8.883,-21.249 -9.442,-22.905 -8.556,-25.148C-8.556,-25.148 -7.188,-25.586 -4.076,-23.478C-2.777,-23.84 -1.383,-24.02 0.002,-24.026C1.385,-24.02 2.779,-23.84 4.08,-23.478C7.19,-25.586 8.555,-25.148 8.555,-25.148C9.444,-22.905 8.885,-21.249 8.717,-20.837C9.761,-19.698 10.392,-18.244 10.392,-16.466C10.392,-10.208 6.583,-8.831 2.954,-8.428C3.539,-7.925 4.06,-6.931 4.06,-5.411C4.06,-3.234 4.04,-1.477 4.04,-0.943C4.04,-0.507 4.333,0 5.16,-0.159C11.628,-2.318 16.291,-8.419 16.291,-15.614C16.291,-24.611 8.997,-31.904 0,-31.904"></path>
                  </g>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home

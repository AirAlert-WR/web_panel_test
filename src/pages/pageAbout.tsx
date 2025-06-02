import * as Icons from "@tabler/icons-react";
import {Card} from "@/components/ui/card.tsx";


export const DATA = {
    id: "about",
    title: "About this app / project",
    icon: Icons.IconInfoCircle,
    component: Content,
    enabled: true,
}

function Content() {
    return (

        <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6">

                    <Card className="@container/card" style={{paddingLeft: "10px"}}>
                        <h1 style={{fontSize: "25px", fontWeight: "bold"}}>
                            About AirAlert
                        </h1>
                        <p>
                            AirAlert is an innovative IoT project for monitoring air quality. It collects real-time data
                            from various sensors<br/>
                            such as temperature, humidity, particulate matter (PM), or CO₂ levels and presents it<br/>
                            visually on a user-friendly website.<br/><br/>

                            The goal of the project is to provide transparency about current air quality conditions
                            indoors or in the<br/>
                            surrounding environment and to raise awareness among users. With the help of smart sensors
                            and modern web technologies <br/>
                            AirAlert enables easy and visual analysis of environmental data – anytime,
                            anywhere.
                        </p>

                        <h2 style={{fontSize: "20px", fontWeight: "bold"}}>Features</h2>

                        <ol style={{listStyleType: 'disc', paddingLeft: "30px"}}>
                            <li>Real-time data collection via IoT sensors</li>
                            <li>Graphical visualization of sensor data</li>
                            <li>Historical data analysis to observe trends</li>
                            <li>Modular and extensible for additional sensors or features</li>
                        </ol>

                        <h2 style={{fontSize: "20px", fontWeight: "bold"}}>Technical Overview</h2>
                            AirAlert is built on modern web and IoT technologies:

                        <ol style={{listStyleType: 'disc', paddingLeft: "30px"}}>
                            <li>Sensors (SDS011 and SCD41)</li>
                            <li>Microcontrollers such as Raspberry Pi</li>
                            <li>MQTT protocol for data transmission</li>
                            <li>Backend for data storage (AWS)</li>
                            <li>Frontend with an interactive user interface</li>
                        </ol>

                        <h2 style={{fontSize: "20px", fontWeight: "bold"}}>The AirAlert Team</h2>
                        <p> We are a group of computer science students from Hochschule Harz who are<br/>
                            passionate about environmental technology and smart systems.<br/>
                            This project was developed as part of our coursework in the Web-Services und
                            -Infrastrukturen module <br/>
                            during the summer semester 2025.<br/><br/>

                            Robert – Backend & MQTT Integration<br/>

                            Pascal – Frontend Development & Data Visualization<br/>

                            Danilo – Sensor Setup & Microcontroller Programming<br/>
                        </p>

                        <h2 style={{fontSize: "20px", fontWeight: "bold"}}>Why AirAlert?</h2>

                        <p>
                            Our daily environment significantly impacts our health and well-being yet many people
                            are<br/>
                            unaware of the air quality in their homes, offices, or neighborhoods. <br/><br/>

                            The motivation behind AirAlert was to create a low-cost, easy-to-use system that makes<br/>
                            invisible data (like CO₂ levels or fine dust) visible and understandable for
                            everyone.<br/><br/>

                            We aim to contribute to more awareness around environmental conditions and enable
                            smarter<br/>
                            decisions whether it's about ventilating a room or avoiding outdoor activities during
                            high<br/>
                            pollution periods.<br/><br/>
                        </p>

                        <h2 style={{fontSize: "20px", fontWeight: "bold"}}>Open Source & Collaboration</h2>

                        <p>
                            AirAlert is an open-source project. We believe in transparency, learning from one
                            another,<br/>
                            and improving through community feedback.<br/><br/>

                            You can find the full source code, documentation, and setup instructions on our GitHub<br/>
                            repository:
                            <a href="https://github.com/AirAlert-WR"> 🔗 Github </a>
                            <br/><br/>

                            Feel free to fork, contribute, or use it as a base for your own environmental
                            monitoring<br/>
                            system!<br/>
                        </p>
                    </Card>

                </div>
            </div>
        </div>
    )
}
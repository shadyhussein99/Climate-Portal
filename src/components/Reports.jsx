
// Reports section

import React from "react"
import MiniReportsLatest from "./MiniReportsLatest"
import MiniReportsOthers from "./MiniReportsOthers"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Reports() {
    return <section>
        <Navbar />
        <article className="container reports-div">
            <h1 className="reports-h1">Climate Reports</h1>
            <p>Key reports on climate impacts and solutions from around the United Nations.</p>
            <h2 className="reports-h2">What's New</h2>

            <article className="row">
                <article className="col-lg-3 col-sm-12">
                    <MiniReportsLatest
                        reportImage="/pics/reports-pics/reports1.PNG"
                        reportHeading="UNEP & WMO | Scientific Assessment of Ozone Depletion"
                        reportParagraph="The successful global phase-out of ozone-depleting chemicals is allowing the ozone layer to recover and is also helping to mitigate climate change."
                        reportLink="https://ozone.unep.org/system/files/documents/Scientific-Assessment-of-Ozone-Depletion-2022-Executive-Summary.pdf"
                        LatestImgClass="miniReportsLatest-img miniReportsLatest-firstImg"
                    />
                </article>
                <article className="col-lg-3 col-sm-12">
                    <MiniReportsLatest
                        reportImage="/pics/reports-pics/reports2.PNG"
                        reportHeading="WMO | Greenhouse Gas Bulletin 2022"
                        reportParagraph="The latest report warns that atmospheric levels of the three main greenhouse gases - carbon dioxide, methane, and nitrous oxide - reached new record highs in 2021, showing the biggest year-on-year jump in methane concentrations since systematic measurements began nearly 40 years ago. Moreover, the increase in carbon dioxide levels from 2020 to 2021 was larger than the average annual growth rate over the last decade."
                        reportLink="https://public.wmo.int/en/greenhouse-gas-bulletin"
                        LatestImgClass="miniReportsLatest-img miniReportsLatest-secondImg"
                    />
                </article>
                <article className="col-lg-3 col-sm-12">
                    <MiniReportsLatest
                        reportImage="/pics/reports-pics/reports3.PNG"
                        reportHeading="WMO | Provisional State of the Global Climate 2022"
                        reportParagraph="The past eight years are on track to be the eight warmest on record, and the telltale signs and impacts of climate change are becoming more dramatic, warns a new report."
                        reportLink="https://storymaps.arcgis.com/stories/5417cd9148c248c0985a5b6d028b0277"
                        LatestImgClass="miniReportsLatest-img miniReportsLatest-thirdImg"
                    />
                </article>
                <article className="col-lg-3 col-sm-12">
                    <MiniReportsLatest
                        reportImage="/pics/reports-pics/reports4.PNG"
                        reportHeading="WMO | We are United in Science (2020)"
                        reportParagraph="Climate change has not stopped for COVID19. United in Science 2020, a new multi-agency report from leading science organizations, highlights the increasing and irreversible impacts of climate change, which affects glaciers, oceans, nature, economies and human living conditions and is often felt through water-related hazards like drought or flooding. It also documents how COVID-19 has impeded our ability to monitor these changes through the global observing system."
                        reportLink="https://public.wmo.int/en/resources/united_in_science"
                        LatestImgClass="miniReportsLatest-img miniReportsLatest-fourthImg"
                    />
                </article>
            </article>
            
            <h2 className="reports-h2">All Reports</h2>
            <MiniReportsOthers
                reportImage="/pics/reports-pics/reports5.PNG"
                reportHeading="UNEP | One Atmosphere: An Independent Expert Review on Solar Radiation Modification Research and Deployment"
                reportParagraph="Solar Radiation Modification - a speculative group of technologies to cool the Earth - requires far more research into its risks and benefits before any consideration for potential deployment, according to an Expert Panel convened by the United Nations Environment Programme. The panel finds that Solar Radiation Modification is not yet ready for large-scale deployment to cool the Earth. Rapid reduction in greenhouse gas emissions must remain the global priority, the report states."
                reportLink="https://www.unep.org/resources/report/Solar-Radiation-Modification-research-deployment"
            />
            <MiniReportsOthers
                reportImage="/pics/reports-pics/reports6.PNG"
                reportHeading="UNEP | Emissions Gap Report 2022: The Closing Window"
                reportParagraph="Inadequate progress on climate action calls for urgent sector and system-wide transformations - in the electricity supply, industry, transport and buildings sectors, and the food and financial systems – as current climate pledges leave the world on track for a temperature rise of 2.4-2.6°C by the end of this century."
                reportLink="https://www.un.org/en/climatechange/reports#:~:text=WMO%20%7C%20State%20of%20Global%20Climate%202021&text=This%20report%20finds%20the%20past,seventh%20warmest%20year%20on%20record"
            />
            <MiniReportsOthers
                reportImage="/pics/reports-pics/reports8.PNG"
                reportHeading="IPCC | Climate Change 2022: Mitigation of Climate Change"
                reportParagraph="Without immediate and deep emissions reductions across all sectors, limiting global warming to 1.5°C (2.7°F) is beyond reach. In the scenarios assessed, limiting warming to around 1.5°C requires global greenhouse gas emissions to peak before 2025 at the latest, and be reduced by 43% by 2030; at the same time, methane would also need to be reduced by about a third. According to the report, there is increasing evidence of climate action. In 2010-2019, average annual global greenhouse gas emissions were at their highest levels in human history, but the rate of growth has slowed. An increasing range of policies and laws have enhanced energy efficiency, reduced rates of deforestation and accelerated the deployment of renewable energy."
                reportLink="https://www.ipcc.ch/report/ar6/wg3/"
            />
            <MiniReportsOthers
                reportImage="/pics/reports-pics/reports7.PNG"
                reportHeading="WMO | State of the Climate in Africa"
                reportParagraph="Water stress and hazards like withering droughts and devastating floods are hitting African communities, economies, and ecosystems hard. Rising water demand combined with limited and unpredictable supplies threatens to aggravate conflict and displacement."
                reportLink="https://public.wmo.int/en/our-mandate/climate/wmo-statement-state-of-global-climate/Africa"
            />
            <MiniReportsOthers
                reportImage="/pics/reports-pics/reports9.PNG"
                reportHeading="IPCC | Climate Change 2022: Impacts, Adaptation, Vulnerability"
                reportParagraph="Human-induced climate change is causing dangerous and widespread disruption in nature and is affecting the lives of billions of people around the world, says this Intergovernmental Panel on Climate Change (IPCC) report. People and ecosystems least able to cope are being hardest hit. Increased heatwaves, droughts and floods are already exceeding plants and animals’ tolerance thresholds, driving mass mortalities in species such as trees and corals. These weather extremes are occurring simultaneously, causing cascading impacts that are increasingly difficult to manage. They have exposed millions of people to acute food and water insecurity, especially in Africa, Asia, Central and South America, on small islands and in the Arctic. To avoid mounting loss of life, biodiversity and infrastructure, urgent, ambitious, and accelerated action is required to adapt to climate change, at the same time as making rapid, deep cuts in greenhouse gas emissions."
                reportLink="https://www.ipcc.ch/report/ar6/wg2/"
            />
            <MiniReportsOthers
                reportImage="/pics/reports-pics/reports10.PNG"
                reportHeading="WMO and others | The State of the Climate in Africa 2020"
                reportParagraph="This report provides a snapshot of climate change trends and impacts in Africa, including sea level rise and the melting of the continent’s iconic glaciers. It highlights the region’s disproportionate vulnerability and shows how the potential benefits of investments in climate adaptation, weather and climate services and early warning systems far outweigh the costs. The report adds to the scientific evidence underlining the urgency of cutting global greenhouse gas emissions, stepping up climate ambition and increasing financing for adaptation. Greater weather and climate variability mean that up to 118 million extremely poor people in Africa may face drought, floods and extreme heat by 2030. Without response measures, poverty alleviation efforts will slow and gross domestic product could fall by up to 3 percent by 2050."
                reportLink="https://public.wmo.int/en/media/press-release/climate-change-triggers-mounting-food-insecurity-poverty-and-displacement-africa"
            />
            <MiniReportsOthers
                reportImage="/pics/reports-pics/reports11.PNG"
                reportHeading="WMO | State of Climate Services (2020)"
                reportParagraph="Between 1970 and 2019, 79% of disasters worldwide involved weather, water, and climate-related hazards. These disasters accounted for 56% of deaths and 75% of economic losses from disasters associated with natural hazards reported during that period. As climate change continues to threaten human lives, ecosystems and economies, risk information and early warning systems (EWS) are increasingly seen as key for reducing these impacts. This latest WMO report highlights progress made in EWS capacity - and identifies where and how governments can invest in effective EWS to strengthen countries' resilience to multiple weather, water and climate-related hazards."
                reportLink="https://library.wmo.int/doc_num.php?explnum_id=10385https://library.wmo.int/doc_num.php?explnum_id=10385"
            />
            <MiniReportsOthers
                reportImage="/pics/reports-pics/reports12.PNG"
                reportHeading="WMO | State of the Global Climate (2019)"
                reportParagraph="The tell-tale physical signs of climate change, such as increasing land and ocean heat, accelerating sea level rise and melting ice, contributed to making 2019 the second warmest year on record according to a new report compiled by a network led by the World Meteorological Organization. The report documents the increasing impacts of weather and climate events on socio-economic development, human health, migration and displacement, food security and land and marine ecosystems."
                reportLink="https://library.wmo.int/doc_num.php?explnum_id=10211"
            />
        </article>
        <Footer />
    </section>
}

export default Reports
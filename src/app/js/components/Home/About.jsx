import React from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import { Row, Col, Card } from "react-bootstrap"
import ann_picture from "../../../style/images/IMG_4207_small.jpg"
import geza_picture from "../../../style/images/IMG_4223_small.jpg"

const About = props => {
    return (
        <div className="bg">
            <div className="container">
                <div className="text-white container-width">
                    <h2>Über Kunstform Wissenschaft</h2>
                    <br></br>
                    <p className="over">KUNSTFORM WISSENSCHAFT engagiert sich für die Sichtbarkeit studentischer Forschung und Lehre auch außerhalb des universitären Kontexts. Wir organisieren digitale und analoge Aktionen und Ausstellungen und möchten auf diese Weise den Dialog in der Gesellschaftanregen.</p>
                    <p className="over">Oftmals gehen die einzelnen studentischen Arbeiten in der Masse aller Abgaben unter und die erarbeiteten Erkenntnisse verlieren so an Sichtbarkeit. Durch die fehlende öffentliche Auseinandersetzung mit den Forschungsergebnissen schwindet das Potential, Diskussionen und einen darauffolgenden Perspektivwechsel innerhalb der Gesellschaft anzuregen. Wir haben es uns daher zum Ziel gesetzt, das Potential studentischer Forschung zu nutzen und für die Gesellschaft wichtige Thematiken gemeinschaftlich interdisziplinär aufzubereiten.</p>
                    <p className="over">Die Symbiose von Kunst und Wissenschaft steht im Mittelpunkt unserer Arbeit, um einen niedrigschwelligen Zugang zu dem erarbeiteten Wissen zu schaffen und den öffentlichen Raum für eine gesamtgesellschaftliche Auseinandersetzung zu öffnen. Die Übersetzung vielschichtiger Thematiken und fachübergreifender Perspektiven in zugängliche – primär audiovisuelle – Sprache steht dabei im Vordergrund.</p>
                    <br></br>
                    <h2>Über uns</h2>
                    <br></br>
                    <p className="over">Aktuell stehen wir mitten in der Gründung unseres Vereins Kunstform Wissenschaft. Hinter der Idee stehen Ann Katzinski und Gesa Hengerer. Wirhaben uns während unseres Bachelorstudiums der Sozialwissenschaften an der Humboldt-Universität zu Berlin kennengelernt und arbeiten seitdeman der Umsetzung unseres Ziels: Einen Zugang zu wissenschaftlichen Erkenntnissen für die breite Öffentlichkeit zu schaffen sowie studentische Forschung und Lehre im öffentlichen Raum sichtbar zu machen. Dabei sehen wir uns primär als vermittelnde Instanz, die die Projekte im Prozess begleitet sowie Studierende dazu anregt und unterstützt, ihre Forschung gestalterisch zu kommunizieren.</p>
                </div><div>
                    <Row className="d-flex justify-content-around">





                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={ann_picture} />
                            <Card.Body>
                                <Card.Title>Ann Katzinski</Card.Title>
                                <Card.Text className="text-black">
                                    Ann studiert im Master Sozialwissenschaften an der Humboldt-Universität zu Berlin und engagiert
                                    sich im Bereich der Stärkung und Sichtbarkeit studentischer Lehre. Im Rahmen von Kunstform Wissenschaft ist
                                    sie die Ansprechpartnerin für administrative Angelegenheiten und verwaltet den Bereich Förderungen und Finanzen.
    </Card.Text></Card.Body>

                            <Card.Body>
                                <Card.Link href="mailto:ann.katzinski@kunstform-wissenschaft.org">ann.katzinski@kunstform-wissenschaft.org</Card.Link>
                            </Card.Body>
                        </Card>


                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={geza_picture} />
                            <Card.Body>
                                <Card.Title>Gesa Hengerer</Card.Title>
                                <Card.Text>
                                    Gesa studiert im Master Gesellschafts- und Wirtschaftskommunikation an der Universität der Künste Berlin.
                                    Sie ist in der Wissenschaftskommunikation zuhause und ist die Ansprechpartnerin für die Kommunikation der Projekte nach außen, insbesondere
                                    im Bereich der sozialen Medien.
    </Card.Text></Card.Body>

                            <Card.Body>
                                <Card.Link href="mailto:gesa.hengerer@kunstform-wissenschaft.org">gesa.hengerer@kunstform-wissenschaft.org</Card.Link>
                            </Card.Body>
                        </Card>

                    </Row>
                </div>
                <br></br>
                <div>
                    <p className="text-white container-width">Oder schreibt gerne an: <a href="mailto:info@kunstform-wissenschaft.org">info@kunstform-wissenschaft.org</a></p>
                </div>
            </div>




        </div >
    );
};

About.propTypes = {

};

export default About;
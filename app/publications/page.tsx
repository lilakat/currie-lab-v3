import React from "react";
import Link from "next/link";
//import { fetchGoogleSheetData } from "../api/googleSheets";

//const sheetId = "1F2DlbaKIcr7uDY7uCmvD9VxTvGR7ukT0SbuE6gZUJzc";
//const range = "all_publications!A2:F";

export default function Publications() {

    return (<>
        <div className="flex justify-center px-2">
            <div className="py-12 md:w-3/5 2xl:w-1/2 text-black font-[family-name:var(--font-dmSans)]">
                <div className="pt-8">
                    <h2 className="border-l-8 border-emerald-700 border-solid pl-4 text-3xl font-bold uppercase">Publications</h2>
                </div>

                <h3 className="text-xl pb-4 md:pl-14">For a complete list of publications, see&nbsp;
                    <Link className="text-emerald-800 hover:text-emerald-500" href="https://pubmed.ncbi.nlm.nih.gov/?term=mark+a+currie&sort=pubdate">PubMed.</Link>
                </h3>

                <div className="py-4">
                    <hr className="border border-emerald-950 border-opacity-25"></hr>
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl">Selected Publications</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.3389/fcell.2022.1026406">Targets of histone H3 lysine 9 methyltransferases</Link>
                        <p className="text-lg pt-1">Levinsky AJ, McEdwards G, Sethna N, Currie MA <br />2022, Frontiers in Cell and Developmental Biology, 10.3389/fcell.2022.1026406</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl leading-snug text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1038/s41586-018-0398-2">Automethylation-induced conformational switch in Clr4 (Suv39h) maintains epigenetic stability</Link>
                        <p className="text-lg pt-1">Iglesias N, Currie MA, Jih G, Paulo JA, Siuti N, Kalocsay M, Gygi SP, Moazed D <br />2018, Nature, 10.1038/s41586-018-0398-2</p>
                    </div >
                </div>

                <div className="py-4">
                    <hr className="border border-emerald-950 border-opacity-25"></hr>
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2024">2024</h3>
                <div className="md:pl-14">
                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1038/s41598-024-70652-8">Mint/X11 PDZ domains from non-bilaterian animals recognize and bind CaV2 calcium channel C-termini in vitro</Link>
                        <p className="text-lg pt-1">Harracksingh AN, Singh A, Mayorova TD, Bejoy B, Hornbeck J, Elkhatib W, McEdwards G, Gauberg J, Taha A, Islam IM, Erclik T, Currie MA, Noyes M, Senatore A <br />2024, Scientific Reports, 10.1038/s41598-024-70652-8</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1101/2024.02.26.582151">The binding of Mint/X11 PDZ domains to CaV2 calcium channels predates bilaterian animals</Link>
                        <p className="text-lg pt-1">Harracksingh AN, Singh A, Mayorova T, Bejoy B, Hornbeck J, Elkhatib W, McEdwards G, Gauberg J, Taha ARW, Islam IM, Erclik T, Currie MA, Noyes M, Senatore A <br />2024, Cold Spring Harbor Laboratory - bioRxiv, 10.1101/2024.02.26.582151</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1038/s41467-024-45384-y">Plastid ancestors lacked a complete Entner-Doudoroff pathway, limiting plants to glycolysis and the pentose phosphate pathway</Link>
                        <p className="text-lg pt-1">Evans SE, Franks AE, Bergman ME, Sethna NS, Currie MA, Phillips MA <br />2024, Nature Communications, 10.1038/s41467-024-45384-y</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1021/acs.jmedchem.3c01850">Tight-Binding Small-Molecule Carboxylesterase 2 Inhibitors Reduce Intracellular Irinotecan Activation</Link>
                        <p className="text-lg pt-1">Kailass K, Casalena D, Jenane L, McEdwards G, Auld DS, Sadovski O, Kaye EG, Hudson E, Nettleton D, Currie MA, Beharry AA <br />2024, Journal of Medicinal Chemistry, 10.1021/acs.jmedchem.3c01850</p>
                    </div >
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2023">2023</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1016/B978-0-12-823376-4.00006-9">The BAH domain: A versatile histone modification reader</Link>
                        <p className="text-lg pt-1">Currie MA, Behrouzi R, Moazed D <br />2023, Chromatin Readers in Health and Disease, 10.1016/B978-0-12-823376-4.00006-9</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1038/s42003-023-05312-0">Function and phylogeny support the independent evolution of an ASIC-like Deg/ENaC channel in the Placozoa</Link>
                        <p className="text-lg pt-1">Elkhatib W, Yanez-Guerra LA, Mayorova TD, Currie MA, Singh A, Perera M, Gauberg J, Senatore A <br />2023, Communications Biology, 10.1038/s42003-023-05312-0</p>
                    </div >
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2022">2022</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.3389/fcell.2022.1026406">Targets of histone H3 lysine 9 methyltransferases</Link>
                        <p className="text-lg pt-1">Levinsky AJ, McEdwards G, Sethna N, Currie MA <br />2022, Frontiers in Cell and Developmental Biology, 10.3389/fcell.2022.1026406</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1101/2022.06.28.497943" >Function and phylogeny support the independent evolution of acid-sensing ion channels in the Placozoa</Link>
                        <p className="text-lg pt-1">Elkhatib W, Yanez-Guerra L, Mayorova TD, Currie MA, Perera M, Singh A, Gauberg J, Senatore A <br />2022, Cold Spring Harbor Laboratory - bioRxiv, 10.1101/2022.06.28.497943</p>
                    </div >
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2021">2021</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1016/j.jbc.2021.100397">Development of a colorimetric α-ketoglutarate detection assay for prolyl hydroxylase domain (PHD) proteins</Link>
                        <p className="text-lg pt-1">Wong SJ, Ringel AE, Yuan W, Paulo JA, Yoon H, Currie MA, Haigis MC <br />2021, Journal of Biological Chemistry, 10.1016/j.jbc.2021.100397</p>
                    </div >
                </div>


                <h3 className="h2 font-bold pt-4 text-2xl" id="2018">2018</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1038/s41586-018-0398-2">Automethylation-induced conformational switch in Clr4 (Suv39h) maintains epigenetic stability</Link>
                        <p className="text-lg pt-1">Iglesias N, Currie MA, Jih G, Paulo JA, Siuti N, Kalocsay M, Gygi SP, Moazed D <br />2018, Nature, 10.1038/s41586-018-0398-2</p>
                    </div >
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2017">2017</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1261/rna.057943.116">Structural and functional characterization of the TYW3/Taw3 className of SAM-dependent methyltransferases</Link>
                        <p className="text-lg pt-1">Currie MA, Brown G, Wong A, Ohira T, Sugiyama K, Suzuki T, Yakunin AF, Jia Z <br />2017, RNA, 10.1261/rna.057943.116</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1038/nature23267">Unique roles for histone H3K9me states in RNAi and heritable silencing of transcription</Link>
                        <p className="text-lg pt-1">Jih G, Iglesias N, Currie MA, Bhanu NV, Paulo JA, Gygi SP, Garcia BA, Moazed D <br />2017, Nature, 10.1038/nature23267</p>
                    </div >
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2016">2016</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.7554/eLife.17556">Heterochromatin assembly by interrupted Sir3 bridges across neighboring nucleosomes</Link>
                        <p className="text-lg pt-1">Behrouzi R, Lu C, Currie MA, Jih G, Iglesias N, Moazed D <br />2016, eLife, 10.7554/eLife.17556</p>
                    </div >
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2013">2013</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1074/jbc.M112.408757">Small Angle X-ray Scattering Analysis ofClostridium thermocellumCellulosome N-terminal Complexes Reveals a Highly Dynamic Structure</Link>
                        <p className="text-lg pt-1">Currie MA, Cameron K, Dias FMV, Spencer HL, Bayer EA, Fontes CMGA, Smith SP, Jia Z <br />2013, Journal of Biological Chemistry, 10.1074/jbc.M112.408757</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1073/pnas.1300126110">Heterochromatin protein Sir3 induces contacts between the amino terminus of histone H4 and nucleosomal DNA</Link>
                        <p className="text-lg pt-1">Wang F, Li G, Altaf M, Lu C, Currie MA, Johnson A, Moazed D <br />2013, Proceedings of the National Academy of Sciences, 10.1073/pnas.1300126110</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1016/j.cellsig.2013.08.033">Structural basis of calcineurin activation by calmodulin</Link>
                        <p className="text-lg pt-1">Ye Q, Feng Y, Yin Y, Faucher F, Currie MA, Rahman MN, Jin J, Li S, Wei Q, Jia Z <br />2013, Cellular Signalling, 10.1016/j.cellsig.2013.08.033</p>
                    </div >
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2012">2012</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1074/jbc.M112.343897">Scaffoldin Conformation and Dynamics Revealed by a Ternary Complex from theClostridium thermocellumCellulosome</Link>
                        <p className="text-lg pt-1">Currie MA, Adams JJ, Faucher F, Bayer EA, Jia Z, Smith SP <br />2012, Journal of Biological Chemistry, 10.1074/jbc.M112.343897</p>
                    </div >
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2010">2010</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1016/j.jmb.2010.01.015">Insights into Higher-Order Organization of the Cellulosome Revealed by a Dissect-and-Build Approach: Crystal Structure of Interacting Clostridium thermocellum Multimodular Components</Link>
                        <p className="text-lg pt-1">Adams JJ, Currie MA, Ali S, Bayer EA, Jia Z, Smith SP <br />2010, Journal of Molecular Biology, 10.1016/j.jmb.2010.01.015</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1107/S1744309110001375">Purification and crystallization of a multimodular heterotrimeric complex containing both type I and type II cohesin–dockerin interactions from the cellulosome ofClostridium thermocellum</Link>
                        <p className="text-lg pt-1">Currie MA, Adams JJ, Ali S, Smith SP, Jia Z <br />2010, Acta Crystallographica Section F Structural Biology and Crystallization Communications, 10.1107/S1744309110001375</p>
                    </div >
                </div>

                <h3 className="h2 font-bold pt-4 text-2xl" id="2009">2009</h3>
                <div className="md:pl-14">

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1016/S1876-1623(08)76001-2">Preparation and Characterization of Bacterial Protein Complexes for Structural Analysis</Link>
                        <p className="text-lg pt-1">Matte A, Kozlov G, Trempe J, Currie MA, Burk D, Jia Z, Gehring K, Ekiel I, Berghuis AM, Cygler M <br />2009, , 10.1016/S1876-1623(08)76001-2</p>
                    </div >

                    <div className="py-4">
                        <Link className="text-xl text-emerald-800 hover:text-emerald-500" href="https://doi.org/10.1074/jbc.M109.012401">ADP-dependent 6-Phosphofructokinase fromPyrococcus horikoshiiOT3</Link>
                        <p className="text-lg pt-1">Currie MA, Merino F, Skarina T, Wong AHY, Singer A, Brown G, Savchenko A, Caniuguir A, Guixé V, Yakunin AF, Jia Z <br />2009, Journal of Biological Chemistry, 10.1074/jbc.M109.012401</p>
                    </div >
                </div>
            </div >
        </div>
    </>);
}
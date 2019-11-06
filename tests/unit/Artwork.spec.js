import { shallowMount } from "@vue/test-utils";
import Artwork from "@/components/Artwork.vue";

describe("Artwork.vue", () => {
  it("should match the snapshot with props passed", () => {
    const mockArtwork = {
        "people": [
          {
            "role": "artist",
            "alphasort": "An artist"
          }
        ],
        "accessionyear":1920,
        "technique":"Cast, lost-wax process",
        "mediacount":0,
        "edition":null,
        "totalpageviews":18,
        "groupcount":1,
        "objectnumber":"1920.44.215",
        "colorcount":0,"lastupdate":
        "2019-11-04T05:55:00-0500",
        "rank":50966,
        "imagecount":2,
        "description":null,
        "dateoflastpageview":"2016-04-17",
        "dateoffirstpageview":"2010-06-14",
        "primaryimageurl":"https://nrs.harvard.edu/urn-3:HUAM:LEG251185_dynmc",
        "dated":"6th-3rd century BCE",
        "contextualtextcount":1,
        "copyright":null,
        "period":"Iron Age",
        "accessionmethod":"Gift",
        "url":"https://www.harvardartmuseums.org/collections/object/303666",
        "provenance":"Miss Elizabeth Gaskell Norton, Boston, MA and Miss Margaret Norton, Cambridge, MA (by 1920), gift; to the Fogg Art Museum, 1920.\r\n\r\nNote: The Misses Norton were daughters of Charles Elliot Norton (1827-1908).",
        "publicationcount":0,
        "images":[
          {
            "height":769,
            "iiifbaseuri":"https://ids.lib.harvard.edu/ids/iiif/46473577",
            "baseimageurl":"https://nrs.harvard.edu/urn-3:HUAM:LEG251185_dynmc",
            "width":1024,
            "publiccaption":null,
            "idsid":46473577,
            "displayorder":1,
            "format":"image/jpeg",
            "copyright":"President and Fellows of Harvard College",
            "imageid":428194,
            "renditionnumber":"LEG251185"
          }
        ],
        "objectid":303666,
        "culture":"Italic",
        "verificationleveldescription":"Best. Object is extensively researched, well described and information is vetted",
        "standardreferencenumber":null,
        "worktypes":[
          {
            "worktypeid":"178",
            "worktype":"horse trapping"
          }
        ],
        "department":"Department of Ancient and Byzantine Art & Numismatics",
        "state":null,
        "markscount":0,
        "contact":"am_asianmediterranean@harvard.edu",
        "titlescount":2,
        "id":303666,
        "title":"Bridle Trapping",
        "verificationlevel":4,
        "division":"Asian and Mediterranean Art",
        "details":
          {
            "technical":
            [
              {
                "text":"ICP-MS/AAA data from sample, Leaded Bronze\r\nCu, 83.06; Sn, 7.27; Pb, 9.45; Zn, 0.029; Fe, 0.02; Ni, 0.03; Ag, 0.05; Sb, 0.1; As, less than 0.10; Bi, less than 0.025; Co, less than 0.005; Au, less than 0.01; Cd, less than 0.001\r\n\r\nJ. Riederer","type":"Chemical Composition","formattedtext":"<P><SPAN style=\"FONT-SIZE: 12pt; FONT-FAMILY: 'Times New Roman','serif'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA\"><SPAN style=\"FONT-SIZE: 12pt; FONT-FAMILY: 'Times New Roman','serif'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA\">ICP-MS/AAA data from sample,</SPAN> Leaded Bronze</SPAN></P>\r\n<P><SPAN style=\"FONT-SIZE: 12pt; FONT-FAMILY: 'Times New Roman','serif'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA\">Cu, <SPAN style=\"mso-no-proof: yes\">83.06</SPAN>; Sn, <SPAN style=\"mso-no-proof: yes\">7.27</SPAN>; Pb, <SPAN style=\"mso-no-proof: yes\">9.45</SPAN>; Zn, <SPAN style=\"mso-no-proof: yes\">0.029</SPAN>; Fe, <SPAN style=\"mso-no-proof: yes\">0.02</SPAN>; Ni, <SPAN style=\"mso-no-proof: yes\">0.03</SPAN>; Ag, <SPAN style=\"mso-no-proof: yes\">0.05</SPAN>; Sb, <SPAN style=\"mso-no-proof: yes\">0.1</SPAN>; As, <SPAN style=\"mso-no-proof: yes\">less than 0.10</SPAN>; Bi, <SPAN style=\"mso-no-proof: yes\">less than 0.025</SPAN>; Co, <SPAN style=\"mso-no-proof: yes\">less than 0.005</SPAN>; Au, <SPAN style=\"mso-no-proof: yes\">less than 0.01</SPAN>; Cd, less than 0.001</SPAN></P>\r\n<P><SPAN style=\"FONT-SIZE: 12pt; FONT-FAMILY: 'Times New Roman','serif'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA\"></SPAN>&nbsp;</P>\r\n<P><SPAN style=\"FONT-SIZE: 12pt; FONT-FAMILY: 'Times New Roman','serif'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA\"></SPAN><SPAN style=\"FONT-SIZE: 12pt; FONT-FAMILY: 'Times New Roman','serif'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA\">J. Riederer</SPAN></P>"},{"text":"The patina is a smooth green and brown, with some exposed metal. There are tan burial deposits in low areas. The object is intact but has casting flaws.\r\n \r\nThe trapping is a solid cast. Some cold working was done to finish the surface after casting. Modern tool marks from rough surface cleaning are also evident.\r\n \r\n \r\nCarol Snow (submitted 2002)","type":"Technical Observations","formattedtext":"<P class=MsoNormal style=\"MARGIN: 0in 0in 3pt\"><SPAN style=\"mso-ascii-font-family: 'Times New Roman'; mso-ascii-theme-font: major-bidi; mso-hansi-font-family: 'Times New Roman'; mso-hansi-theme-font: major-bidi; mso-bidi-font-family: 'Times New Roman'; mso-bidi-theme-font: major-bidi\"><FONT size=3><FONT face=\"Times New Roman\">The patina is a smooth green and brown, with some exposed metal. There are tan burial deposits in low areas. The object is intact but has casting flaws.<?xml:namespace prefix = \"o\" ns = \"urn:schemas-microsoft-com:office:office\" /><o:p></o:p></FONT></FONT></SPAN></P>\r\n<P class=MsoNormal style=\"MARGIN: 0in 0in 3pt\"><SPAN style=\"mso-ascii-font-family: 'Times New Roman'; mso-ascii-theme-font: major-bidi; mso-hansi-font-family: 'Times New Roman'; mso-hansi-theme-font: major-bidi; mso-bidi-font-family: 'Times New Roman'; mso-bidi-theme-font: major-bidi\"><o:p><FONT size=3 face=\"Times New Roman\">&nbsp;</FONT></o:p></SPAN></P>\r\n<P class=MsoNormal style=\"MARGIN: 0in 0in 3pt\"><SPAN style=\"mso-ascii-font-family: 'Times New Roman'; mso-ascii-theme-font: major-bidi; mso-hansi-font-family: 'Times New Roman'; mso-hansi-theme-font: major-bidi; mso-bidi-font-family: 'Times New Roman'; mso-bidi-theme-font: major-bidi\"><FONT size=3><FONT face=\"Times New Roman\">The trapping is a solid cast. Some cold working was done to finish the surface after casting. Modern tool marks from rough surface cleaning are also evident.<o:p></o:p></FONT></FONT></SPAN></P>\r\n<P class=MsoNormal style=\"MARGIN: 0in 0in 3pt\"><SPAN style=\"mso-ascii-font-family: 'Times New Roman'; mso-ascii-theme-font: major-bidi; mso-hansi-font-family: 'Times New Roman'; mso-hansi-theme-font: major-bidi; mso-bidi-font-family: 'Times New Roman'; mso-bidi-theme-font: major-bidi\"><o:p><FONT size=3 face=\"Times New Roman\">&nbsp;</FONT></o:p></SPAN></P>\r\n<P class=MsoNormal style=\"MARGIN: 0in 0in 3pt\"><SPAN style=\"mso-ascii-font-family: 'Times New Roman'; mso-ascii-theme-font: major-bidi; mso-hansi-font-family: 'Times New Roman'; mso-hansi-theme-font: major-bidi; mso-bidi-font-family: 'Times New Roman'; mso-bidi-theme-font: major-bidi\"><o:p><FONT size=3 face=\"Times New Roman\">&nbsp;</FONT></o:p></SPAN></P><SPAN style=\"FONT-SIZE: 12pt; FONT-FAMILY: 'Times New Roman','serif'; mso-ascii-theme-font: major-bidi; mso-hansi-theme-font: major-bidi; mso-bidi-theme-font: major-bidi; mso-fareast-font-family: Cambria; mso-fareast-theme-font: minor-latin; mso-bidi-language: AR-SA; mso-ansi-language: EN-US; mso-fareast-language: EN-US\">Carol Snow (submitted 2002)</SPAN>"
              }
            ]
          },
          "style":null,
          "commentary":null,
          "relatedcount":2,
          "datebegin":-600,
          "labeltext":null,
          "totaluniquepageviews":15,
          "dimensions":"7 x 2.8 x 4.7 cm (2 3/4 x 1 1/8 x 1 7/8 in.)",
          "exhibitioncount":0,
          "techniqueid":1311,
          "dateend":-200,
          "creditline":"Harvard Art Museums/Arthur M. Sackler Museum, Gift of the Misses Norton",
          "imagepermissionlevel":0,
          "signed":null,
          "periodid":401,
          "century":"6th-3rd century BCE",
          "classificationid":330,
          "medium":"Leaded bronze",
          "peoplecount":0,
          "accesslevel":1,
          "classification":"Riding Equipment",
          "seeAlso":[
            {
              "id":"https://iiif.harvardartmuseums.org/manifests/object/303666",
              "type":"IIIF Manifest",
              "format":"application/json",
              "profile":"http://iiif.io/api/presentation/2/context.json"
            }
          ]
        }
    const wrapper = shallowMount(Artwork, { propsData: {artwork: mockArtwork}});
    expect(wrapper.element).toMatchSnapshot();
  });
});

import { shallowMount } from '@vue/test-utils'
import Gallery from '@/components/Gallery.vue'

describe('Gallery.vue', () => {
  it('renders props.mockArtObjects when passed', () => {
    const mockArtObjects = [
      [
        {
          accessionyear: 1920,
          technique: "Cast, lost-wax process",
          mediacount: 0,
          edition: null,
          totalpageviews: 10,
          groupcount: 1,
          objectnumber: "1920.44.260",
          colorcount: 0,
          lastupdate: "2019-11-03T05:56:43-0500",
          rank: 50998,
          imagecount: 2,
          description: null,
          dateoflastpageview: "2015-08-11",
          dateoffirstpageview: "2011-11-28",
          primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:LEG251206_dynmc",
          dated: "late 6th-early 3rd century BCE",
          contextualtextcount: 1,
          copyright: null,
          period: "Archaic period to Classical",
          accessionmethod: "Gift",
          url: "https://www.harvardartmuseums.org/collections/object/304057",
          provenance:
            "Miss Elizabeth Gaskell Norton, Boston, MA and Miss Margaret Norton, Cambridge, MA (by 1920), gift; to the Fogg Art Museum, 1920.\r\n\r\nNote: The Misses Norton were daughters of Charles Elliot Norton (1827-1908).",
          publicationcount: 0,
          images: [
            {
              height: 983,
              iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/46473598",
              baseimageurl:
                "https://nrs.harvard.edu/urn-3:HUAM:LEG251206_dynmc",
              width: 1024,
              publiccaption: null,
              idsid: 46473598,
              displayorder: 1,
              format: "image/jpeg",
              copyright: "President and Fellows of Harvard College",
              imageid: 428215,
              renditionnumber: "LEG251206"
            },
            {
              height: 984,
              iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/43163112",
              baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:LEG5123_dynmc",
              width: 1024,
              publiccaption: null,
              idsid: 43163112,
              displayorder: 2,
              format: "image/jpeg",
              copyright: "President and Fellows of Harvard College",
              imageid: 162464,
              renditionnumber: "LEG5123"
            }
          ],
          objectid: 304057,
          culture: "Etruscan",
          verificationleveldescription:
            "Best. Object is extensively researched, well described and information is vetted",
          standardreferencenumber: null,
          worktypes: [{ worktypeid: "178", worktype: "horse trapping" }],
          department: "Department of Ancient and Byzantine Art & Numismatics",
          state: null,
          markscount: 0,
          contact: "am_asianmediterranean@harvard.edu",
          titlescount: 1,
          id: 304057,
          title: "Part of a Snaffle",
          verificationlevel: 4,
          division: "Asian and Mediterranean Art",
          details: {
            technical: [
              {
                text:
                  "ICP-MS/AAA data from sample, Leaded Bronze:\r\nCu, 64.08; Sn, 4.59; Pb, 30.9; Zn, 0.002; Fe, 0.03; Ni, 0.04; Ag, 0.06; Sb, 0.1; As, 0.19; Bi, less than 0.025; Co, 0.011; Au, less than 0.01; Cd, less than 0.001\r\n\r\nJ. Riederer",
                type: "Chemical Composition",
                formattedtext:
                  '<P><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: \'Times New Roman\',\'serif\'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: \'Times New Roman\',\'serif\'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA">ICP-MS/AAA data from sample, </SPAN>Leaded Bronze:</SPAN></P>\r\n<P><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: \'Times New Roman\',\'serif\'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA">Cu, <SPAN style="mso-no-proof: yes">64.08</SPAN>; Sn, <SPAN style="mso-no-proof: yes">4.59</SPAN>; Pb, <SPAN style="mso-no-proof: yes">30.9</SPAN>; Zn, <SPAN style="mso-no-proof: yes">0.002</SPAN>; Fe, <SPAN style="mso-no-proof: yes">0.03</SPAN>; Ni, <SPAN style="mso-no-proof: yes">0.04</SPAN>; Ag, <SPAN style="mso-no-proof: yes">0.06</SPAN>; Sb, <SPAN style="mso-no-proof: yes">0.1</SPAN>; As, <SPAN style="mso-no-proof: yes">0.19</SPAN>; Bi, <SPAN style="mso-no-proof: yes">less than 0.025</SPAN>; Co, <SPAN style="mso-no-proof: yes">0.011</SPAN>; Au, <SPAN style="mso-no-proof: yes">less than 0.01</SPAN>; Cd, less than 0.001</SPAN></P>\r\n<P><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: \'Times New Roman\',\'serif\'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"></SPAN>&nbsp;</P>\r\n<P><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: \'Times New Roman\',\'serif\'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA"></SPAN><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: \'Times New Roman\',\'serif\'; mso-fareast-font-family: Calibri; mso-fareast-theme-font: minor-latin; mso-ansi-language: EN-US; mso-fareast-language: EN-US; mso-bidi-language: AR-SA">J. Riederer</SPAN></P>'
              },
              {
                text:
                  "The patina is a dull, pitted black over brown; there is a white material, perhaps wax, in the pits. Two prongs are missing. The snaffle is a solid cast.\r\n \r\n \r\nCarol Snow (submitted 2002)",
                type: "Technical Observations",
                formattedtext:
                  '<P class=MsoNormal style="MARGIN: 0in 0in 3pt"><SPAN style="mso-fareast-font-family: Cambria; mso-bidi-font-family: \'Times New Roman\'"><FONT size=3><FONT face="Times New Roman">The patina is a dull, pitted black over brown; there is a white material, perhaps wax, in the pits. Two prongs are missing. The snaffle is a solid cast.<?xml:namespace prefix = "o" ns = "urn:schemas-microsoft-com:office:office" /><o:p></o:p></FONT></FONT></SPAN></P>\r\n<P class=MsoNormal style="MARGIN: 0in 0in 3pt"><SPAN style="mso-fareast-font-family: Cambria; mso-bidi-font-family: \'Times New Roman\'"><o:p><FONT size=3 face="Times New Roman">&nbsp;</FONT></o:p></SPAN></P>\r\n<P class=MsoNormal style="MARGIN: 0in 0in 3pt"><SPAN style="mso-fareast-font-family: Cambria; mso-bidi-font-family: \'Times New Roman\'"><o:p><FONT size=3 face="Times New Roman">&nbsp;</FONT></o:p></SPAN></P><SPAN style="FONT-SIZE: 12pt; FONT-FAMILY: \'Times New Roman\',\'serif\'; mso-fareast-font-family: Cambria; mso-bidi-language: AR-SA; mso-ansi-language: EN-US; mso-fareast-language: EN-US">Carol Snow (submitted 2002)</SPAN>'
              }
            ]
          },
          style: null,
          commentary: null,
          relatedcount: 0,
          datebegin: -525,
          labeltext: null,
          totaluniquepageviews: 8,
          dimensions: "3.5 x 4.5 x 4.6 cm (1 3/8 x 1 3/4 x 1 13/16 in.)",
          exhibitioncount: 0,
          techniqueid: 1311,
          dateend: -275,
          creditline:
            "Harvard Art Museums/Arthur M. Sackler Museum, Gift of the Misses Norton",
          imagepermissionlevel: 0,
          signed: null,
          periodid: 7373,
          century: "6th-3rd century BCE",
          classificationid: 330,
          medium: "Leaded bronze",
          peoplecount: 0,
          accesslevel: 1,
          classification: "Riding Equipment",
          seeAlso: [
            {
              id: "https://iiif.harvardartmuseums.org/manifests/object/304057",
              type: "IIIF Manifest",
              format: "application/json",
              profile: "http://iiif.io/api/presentation/2/context.json"
            }
          ]
        },
        {
          accessionyear: 2006,
          technique: null,
          mediacount: 0,
          edition: null,
          totalpageviews: 29,
          groupcount: 0,
          objectnumber: "2006.44",
          colorcount: 8,
          lastupdate: "2019-11-03T05:48:50-0500",
          rank: 124679,
          imagecount: 2,
          description: null,
          dateoflastpageview: "2019-05-02",
          dateoffirstpageview: "2009-12-22",
          primaryimageurl: "https://nrs.harvard.edu/urn-3:HUAM:760194",
          colors: [
            {
              percent: 0.6216107382550335,
              spectrum: "#8761aa",
              color: "#969696",
              css3: "#a9a9a9",
              hue: "Grey"
            },
            {
              percent: 0.172751677852349,
              spectrum: "#59ba4a",
              color: "#644b32",
              css3: "#556b2f",
              hue: "Brown"
            },
            {
              percent: 0.09082774049217002,
              spectrum: "#8362aa",
              color: "#7d7d7d",
              css3: "#808080",
              hue: "Grey"
            },
            {
              percent: 0.08268456375838926,
              spectrum: "#59ba4a",
              color: "#643219",
              css3: "#8b4513",
              hue: "Brown"
            },
            {
              percent: 0.019284116331096196,
              spectrum: "#3db657",
              color: "#321919",
              css3: "#000000",
              hue: "Brown"
            },
            {
              percent: 0.009932885906040268,
              spectrum: "#7fc241",
              color: "#967d4b",
              css3: "#a0522d",
              hue: "Brown"
            },
            {
              percent: 0.0015659955257270694,
              spectrum: "#2eb45d",
              color: "#190000",
              css3: "#000000",
              hue: "Black"
            },
            {
              percent: 0.0013422818791946308,
              spectrum: "#e9715f",
              color: "#af9664",
              css3: "#bdb76b",
              hue: "Yellow"
            }
          ],
          dated: "1200-1300",
          contextualtextcount: 0,
          copyright: null,
          period: "Ilkhanid period",
          accessionmethod: "Gift",
          url: "https://www.harvardartmuseums.org/collections/object/7315",
          provenance: null,
          images: [
            {
              height: 2550,
              iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/422090760",
              baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:760194",
              width: 2537,
              publiccaption: null,
              idsid: 422090760,
              displayorder: 1,
              format: "image/jpeg",
              copyright: "President and Fellows of Harvard College",
              imageid: 462837,
              renditionnumber: "760194"
            },
            {
              height: 2525,
              iiifbaseuri: "https://ids.lib.harvard.edu/ids/iiif/422090764",
              baseimageurl: "https://nrs.harvard.edu/urn-3:HUAM:760195",
              width: 2550,
              publiccaption: "back",
              idsid: 422090764,
              displayorder: 2,
              format: "image/jpeg",
              copyright: "President and Fellows of Harvard College",
              imageid: 462838,
              renditionnumber: "760195"
            }
          ],
          publicationcount: 0,
          objectid: 7315,
          culture: "Persian",
          verificationleveldescription:
            "Unchecked. Object information has not been verified for completeness and has not been vetted",
          standardreferencenumber: null,
          worktypes: [{ worktypeid: "178", worktype: "horse trapping" }],
          department: "Department of Islamic & Later Indian Art",
          state: null,
          markscount: 0,
          contact: "am_asianmediterranean@harvard.edu",
          titlescount: 1,
          id: 7315,
          title: "Ornament from Horse Trapping",
          verificationlevel: 0,
          division: "Asian and Mediterranean Art",
          style: null,
          commentary: null,
          relatedcount: 0,
          datebegin: 1200,
          labeltext: null,
          totaluniquepageviews: 21,
          dimensions: "4 x 4.5 cm (1 9/16 x 1 3/4 in.)",
          exhibitioncount: 0,
          techniqueid: null,
          dateend: 1300,
          creditline:
            "Harvard Art Museums/Arthur M. Sackler Museum, Gift of Abolala Soudavar",
          imagepermissionlevel: 0,
          signed: null,
          periodid: 2583,
          century: "13th century",
          classificationid: 330,
          medium: "Silver gilt, worked in repoussé, chased, and incised",
          peoplecount: 0,
          accesslevel: 1,
          classification: "Riding Equipment",
          seeAlso: [
            {
              id: "https://iiif.harvardartmuseums.org/manifests/object/7315",
              type: "IIIF Manifest",
              format: "application/json",
              profile: "http://iiif.io/api/presentation/2/context.json"
            }
          ]
        }
      ]
    ];
    const wrapper = shallowMount(Gallery, {
      propsData: { mockArtObjects }
    })
    expect(wrapper).toMatchSnapshot()
  })
})

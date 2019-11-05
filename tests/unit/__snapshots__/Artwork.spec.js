import { shallowMount } from "@vue/test-utils";
import Artwork from "@/components/Artwork.vue";

describe("Gallery.vue", () => {
  it("renders props.mockArtObjects when passed", () => {
    const mockArtObject = [
      [
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
    const wrapper = shallowMount(Artwork, {
      propsData: { mockArtObject }
    });
    expect(wrapper).toMatchSnapshot();
  });
});

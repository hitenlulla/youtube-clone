import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) => {
  const dummy_data = {
    contents: [
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@HYBELABELS",
            channelId: "UC3IZKseVpdzPSBaWxBxundA",
            title: "HYBE LABELS",
          },
          badges: ["New", "4K"],
          descriptionSnippet:
            "NewJeans (뉴진스) 'Cool With You' Official MV (side A) Producer: MIN HEE JIN Music Video Director: Wooseok Shin © 2023 ...",
          isLiveNow: false,
          lengthSeconds: 240,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/zsYSSVoQnP4/mqdefault_6s.webp?du=3000&sqp=CLCq-aUG&rs=AOn4CLAD3i6njO25VcwNs7axCugJEt7Ddw",
              width: 320,
            },
          ],
          publishedTimeText: "4 days ago",
          stats: {
            views: 7720212,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/zsYSSVoQnP4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYEQGCABbjLb-bqpqt_PYuvWJ7GA",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/zsYSSVoQnP4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeRJCMPm75b_eNb9cjwyeSRAkSeA",
              width: 720,
            },
          ],
          title: "NewJeans (뉴진스) 'Cool With You' Official MV (side A)",
          videoId: "zsYSSVoQnP4",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@HYBELABELS",
            channelId: "UC3IZKseVpdzPSBaWxBxundA",
            title: "HYBE LABELS",
          },
          badges: ["New", "4K"],
          descriptionSnippet:
            "NewJeans (뉴진스) 'Cool With You' & 'Get Up' Official MV (side B) Producer: MIN HEE JIN Music Video Director: Wooseok Shin ...",
          isLiveNow: false,
          lengthSeconds: 256,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/nJDMAjwxthM/mqdefault_6s.webp?du=3000&sqp=CLni-aUG&rs=AOn4CLD3OLeG-CGiVVQKgsYTB3yArUb6nQ",
              width: 320,
            },
          ],
          publishedTimeText: "4 days ago",
          stats: {
            views: 6561321,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/nJDMAjwxthM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3Cjidg5tHtYx9SJrXLhYv2VxWCQ",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/nJDMAjwxthM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeCNrIJJNpEe8_zmuh0uj7v_y2Hw",
              width: 720,
            },
          ],
          title:
            "NewJeans (뉴진스) 'Cool With You' & 'Get Up' Official MV (side B)",
          videoId: "nJDMAjwxthM",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@marvel",
            channelId: "UCvC4D8onUfXzvjTOM-dBfEA",
            title: "Marvel Entertainment",
          },
          badges: ["New", "CC"],
          descriptionSnippet:
            "This fall, The Marvels take flight. Carol Danvers aka Captain Marvel has reclaimed her identity from the tyrannical Kree and taken ...",
          isLiveNow: false,
          lengthSeconds: 140,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/wS_qbDztgVY/mqdefault_6s.webp?du=3000&sqp=CI7i-aUG&rs=AOn4CLC7zK2LhDJhPgo8CZ9z1EFb77p9hA",
              width: 320,
            },
          ],
          publishedTimeText: "3 days ago",
          stats: {
            views: 12824257,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/wS_qbDztgVY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTwboZoU9kaczqdZ0sUZyHW3_9DA",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/wS_qbDztgVY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCph3ces32aYtMsrPgEqSDxz966Tw",
              width: 720,
            },
          ],
          title: "Marvel Studios' The Marvels | Official Trailer",
          videoId: "wS_qbDztgVY",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@HYBELABELS",
            channelId: "UC3IZKseVpdzPSBaWxBxundA",
            title: "HYBE LABELS",
          },
          badges: ["New", "CC"],
          descriptionSnippet:
            "NewJeans (뉴진스) 'ETA' Official MV Producer: MIN HEE JIN Music Video Director: Wooseok Shin In collaboration with Apple, this ...",
          isLiveNow: false,
          lengthSeconds: 217,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/jOTfBlKSQYY/mqdefault_6s.webp?du=3000&sqp=COzT-aUG&rs=AOn4CLB4XJFnUuzkSX4BiXVzXHTSt2FfsQ",
              width: 320,
            },
          ],
          publishedTimeText: "3 days ago",
          stats: {
            views: 10344719,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/jOTfBlKSQYY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwbe1ngm5SLnEfX0iciol9sKtVRw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/jOTfBlKSQYY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7CXd2PYfucvE0TEbowCVKr8L0BA",
              width: 720,
            },
          ],
          title: "NewJeans (뉴진스) 'ETA' Official MV",
          videoId: "jOTfBlKSQYY",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaRniHd8aMqT2ZEU7LOlY3RwkuKTDb81p9YKpCjUYbY=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@msnbc",
            channelId: "UCaXkIU1QidjPwiAYu6GcHjg",
            title: "MSNBC",
          },
          badges: ["New", "CC"],
          descriptionSnippet:
            "Gov. Ron DeSantis, R-Fla., is criticism over Florida's overhaul to Florida's African American history standards, and DeSantis now ...",
          isLiveNow: false,
          lengthSeconds: 464,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/v6A_JQ38rGU/mqdefault_6s.webp?du=3000&sqp=CLze-aUG&rs=AOn4CLDwYgu6kILjuawca_birYWcIBXchA",
              width: 320,
            },
          ],
          publishedTimeText: "34 minutes ago",
          stats: {
            views: 13271,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/v6A_JQ38rGU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOuySvpA1GW-Ei7ogJQZXQbCzQAQ",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/v6A_JQ38rGU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYXkgGAk5tz_9BW6GbYqdvj6zAow",
              width: 720,
            },
          ],
          title:
            "'I didn't do it': DeSantis distances himself from Florida's new teaching standards",
          videoId: "v6A_JQ38rGU",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaQxz6XzFOBAqYBwjtif2Cy-6vYh0Pb89RRrH6NR=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@DharMann",
            channelId: "UC_hK9fOxyy_TM8FJGXIyG8Q",
            title: "Dhar Mann",
          },
          badges: ["New", "4K"],
          descriptionSnippet:
            "REMEMBER - We're not just telling stories, we're changing lives! So please help my videos change more lives by SHARING!",
          isLiveNow: false,
          lengthSeconds: 1054,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/hFjOJ-muO2Q/mqdefault_6s.webp?du=3000&sqp=CPzU-aUG&rs=AOn4CLDbso2Ht74Ik0l0GamXD1K3XcnLoQ",
              width: 320,
            },
          ],
          publishedTimeText: "2 days ago",
          stats: {
            views: 2647919,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/hFjOJ-muO2Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDycjdtNtjVqpCLDa3PF6jhh1jtKg",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/hFjOJ-muO2Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZALqtoxNI8_vkI5XUQfQn6SLgg",
              width: 720,
            },
          ],
          title:
            "ENTITLED GIRL Won't PAY On Her Date, She Lives To Regret It | Dhar Mann",
          videoId: "hFjOJ-muO2Q",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@HYBELABELS",
            channelId: "UC3IZKseVpdzPSBaWxBxundA",
            title: "HYBE LABELS",
          },
          badges: ["New", "4K"],
          descriptionSnippet:
            "NewJeans (뉴진스) 'Cool With You' Official MV (Performance ver.) Producer: MIN HEE JIN Music Video Director: Wooseok Shin ...",
          isLiveNow: false,
          lengthSeconds: 148,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/kKsivrgoyDw/mqdefault_6s.webp?du=3000&sqp=CPDe-aUG&rs=AOn4CLD_Ww6Rz21KeiORsR1aeNziEi3IvQ",
              width: 320,
            },
          ],
          publishedTimeText: "3 days ago",
          stats: {
            views: 2823733,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/kKsivrgoyDw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1auXspbFh77w1hkFeAYS_3vS5fA",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/kKsivrgoyDw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLALZM1vCODvwgxdyNHdTNVp-Lzjuw",
              width: 720,
            },
          ],
          title:
            "NewJeans (뉴진스) 'Cool With You' Official MV (Performance ver.)",
          videoId: "kKsivrgoyDw",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/8bxt8LRpUj8N0HPHa_yaQ-UgL3eLFmHU1y1sQ4xcdISDDSqlT-JN8jb3yXmDSU-dl3nR3FT9QQ=s88-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Official Artist Channel",
                type: "OFFICIAL_ARTIST_CHANNEL",
              },
            ],
            canonicalBaseUrl: null,
            channelId: "UC3PdiRW5dUA4V70ueeR1eHA",
            title: "zayn",
          },
          badges: ["New", "4K"],
          descriptionSnippet:
            'Watch the official video for "Love Like This" by ZAYN. Stream/download "Love Like This": https://zayn.lnk.to/lovelikethis Follow ...',
          isLiveNow: false,
          lengthSeconds: 172,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/918oGJFtjjw/mqdefault_6s.webp?du=3000&sqp=CIzY-aUG&rs=AOn4CLDPgpxCHOvnEC8X1YJ2UT-KTlEYMg",
              width: 320,
            },
          ],
          publishedTimeText: "3 days ago",
          stats: {
            views: 4118335,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/918oGJFtjjw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOukyXIj5BL4FF1BV2Kpc2AmouYQ",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/918oGJFtjjw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDch8RWohyUkB1BepLlL0jKC0tq4w",
              width: 720,
            },
          ],
          title: "ZAYN - Love Like This (Official Music Video)",
          videoId: "918oGJFtjjw",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaSYB6MdxwFdn-KejRt8jvYYkCxzLE_v_qGhW7_fGA=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@Fox59WXIN",
            channelId: "UCktceZtn0Kxd53qjjM2KzqA",
            title: "FOX59 News",
          },
          badges: ["New", "CC"],
          descriptionSnippet:
            "Thousands of backpacks distributed to Indianapolis families ahead of new school year.",
          isLiveNow: false,
          lengthSeconds: 54,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/-Oes89O5gm4/mqdefault_6s.webp?du=3000&sqp=CLrM-aUG&rs=AOn4CLCcS4in95EilgFFZKEBv8cmPtMCaQ",
              width: 320,
            },
          ],
          publishedTimeText: "1 day ago",
          stats: {
            views: 256,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/-Oes89O5gm4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBBiTvECylDSP0yPdRDAcwOo8L0A",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/-Oes89O5gm4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1keLhnv-qbLQeNJsKbwXiyw4z2g",
              width: 720,
            },
          ],
          title:
            "Thousands of backpacks distributed to Indianapolis families ahead of new school year",
          videoId: "-Oes89O5gm4",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaR6is1oR0gOoih3NciojGKmi_zXJE1aLKM-lkck=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [],
            canonicalBaseUrl: "/@MarvelUK",
            channelId: "UCM-jlCRlsC59Pq5oXa61CzA",
            title: "Marvel UK",
          },
          badges: ["New"],
          descriptionSnippet:
            "This November, #TheMarvels take flight. Watch the brand-new trailer, and don't miss Captain Marvel, Monica Rambeau, and Ms.",
          isLiveNow: false,
          lengthSeconds: 148,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/QJG4cWmY3BI/mqdefault_6s.webp?du=3000&sqp=CKrs-aUG&rs=AOn4CLDUl96HDSnF4gvShjFnM2dM7qBJuA",
              width: 320,
            },
          ],
          publishedTimeText: "3 days ago",
          stats: {
            views: 202877,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/QJG4cWmY3BI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArWwiaWDbh_XsMgvPNqcXQupo6Iw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/QJG4cWmY3BI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTb4sEZvZpTLO2lKf2CJNX206zxg",
              width: 720,
            },
          ],
          title: "Marvel Studios’ The Marvels | Official Trailer",
          videoId: "QJG4cWmY3BI",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaS2cwIR7FjniSvWNccPiETWMb2OhBWLGz2Jcq2AkQ=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@VyjayanthiNetwork",
            channelId: "UC70pKToywlxOGdgIvz8gYqA",
            title: "Vyjayanthi Network",
          },
          badges: ["New", "4K"],
          descriptionSnippet:
            "PROJECT-K is now #Kalki2898AD #KalkiGlimpse #Prabhas #AmitabhBachchan #KamalHaasan #DeepikaPadukone ...",
          isLiveNow: false,
          lengthSeconds: 76,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/bC36d8e3bb0/mqdefault_6s.webp?du=3000&sqp=CIy_-aUG&rs=AOn4CLCINl00LcfbKpsq8hrJLCHlIMmPEw",
              width: 320,
            },
          ],
          publishedTimeText: "3 days ago",
          stats: {
            views: 19358930,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/bC36d8e3bb0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrG6MItFntjDE4ADic7Jv6SqJ07A",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/bC36d8e3bb0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhAWVwNonHbp1dy5ZwOoEZnfUEIA",
              width: 720,
            },
          ],
          title:
            "Kalki 2898 AD Glimpse | Prabhas | Amitabh Bachchan | Kamal Haasan | Deepika Padukone | Nag Ashwin",
          videoId: "bC36d8e3bb0",
        },
      },
      {
        channel: {
          avatar: [
            {
              height: 88,
              url: "https://yt3.ggpht.com/BZRQFTUdzDQja9FvseSIVIB7wlEhjIPUJJ3vOFvfcVEQgut6hj3wjd5d25ukTuLAGwGbaGI9grk=s88-c-k-c0x00ffffff-no-rj-mo",
              width: 88,
            },
            {
              height: 176,
              url: "https://yt3.ggpht.com/BZRQFTUdzDQja9FvseSIVIB7wlEhjIPUJJ3vOFvfcVEQgut6hj3wjd5d25ukTuLAGwGbaGI9grk=s176-c-k-c0x00ffffff-no-rj-mo",
              width: 176,
            },
          ],
          badges: [],
          canonicalBaseUrl: "/@Booba_Cartoon",
          channelId: "UCV9FxSrPVEX3vjBax04V_uA",
          descriptionSnippet:
            "This animated cartoon is about Booba, a cute and inquisitive creature, that acts like a five-year-old kid. Booba explores the world ...",
          stats: {
            subscribers: 1960000,
            subscribersText: "1.96M subscribers",
          },
          title: "Booba Cartoon – New Episodes and Compilations",
          username: "@Booba_Cartoon",
        },
        type: "channel",
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@HYBELABELS",
            channelId: "UC3IZKseVpdzPSBaWxBxundA",
            title: "HYBE LABELS",
          },
          badges: ["4K", "CC"],
          descriptionSnippet:
            "NewJeans (뉴진스) 'New Jeans' Official MV Producer: MIN HEE JIN Music Video Director: Youngeum Lee THE POWERPUFF ...",
          isLiveNow: false,
          lengthSeconds: 211,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/kcelgrGY1h8/mqdefault_6s.webp?du=3000&sqp=COna-aUG&rs=AOn4CLAblxb2w-pVouN2i7THjNcDDpbSSQ",
              width: 320,
            },
          ],
          publishedTimeText: "2 weeks ago",
          stats: {
            views: 13237039,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/kcelgrGY1h8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAscTTeoGjtCSJAzNC47sLBK10eyQ",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/kcelgrGY1h8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC0fvkqG9puCo0K_u3fIXozoO8Btg",
              width: 720,
            },
          ],
          title: "NewJeans (뉴진스) 'New Jeans' Official MV",
          videoId: "kcelgrGY1h8",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaQdfSRhcE0CNaJkVHMjeKMud1Jqe2D2MrM0kIoHEw=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@HYBELABELS",
            channelId: "UC3IZKseVpdzPSBaWxBxundA",
            title: "HYBE LABELS",
          },
          badges: ["4K", "CC"],
          descriptionSnippet:
            "NewJeans (뉴진스) 'Super Shy' Official MV Producer: MIN HEE JIN Music Video Director: Heewon Shin 0:00 Super Shy 1:44 Join ...",
          isLiveNow: false,
          lengthSeconds: 201,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/ArmDp-zijuc/mqdefault_6s.webp?du=3000&sqp=CLjN-aUG&rs=AOn4CLAt2opeSE_2dygCYInYWchhNiMg8A",
              width: 320,
            },
          ],
          publishedTimeText: "2 weeks ago",
          stats: {
            views: 35795360,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/ArmDp-zijuc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEM94IxWekQBbD4awEKbgt3q11Sw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/ArmDp-zijuc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjDMMTXDVqDQ8j3VK0ywp2xRHPIQ",
              width: 720,
            },
          ],
          title: "NewJeans (뉴진스) 'Super Shy' Official MV",
          videoId: "ArmDp-zijuc",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaSeaqT_pKQrAnG4Tfj9I4pfvDnwfdiah1YIcYg=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@BlooprintsBunker",
            channelId: "UC3mG1jxWYgBoJwSaJrke3YQ",
            title: "Blooprint's Bunker",
          },
          badges: ["New"],
          descriptionSnippet:
            "Play Enlisted for FREE on PC, Xbox Series X|S and PS®5. Use my link: https://playen.link/blooprintsbunker To download the ...",
          isLiveNow: false,
          lengthSeconds: 2981,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/711TPm9aXS4/mqdefault_6s.webp?du=3000&sqp=CLLr-aUG&rs=AOn4CLB7HCeFvShTSYETJpVWxtu72XKhEg",
              width: 320,
            },
          ],
          publishedTimeText: "16 hours ago",
          stats: {
            views: 134085,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/711TPm9aXS4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8iBsRJeOBossuzMl8f4CrAcOX5A",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/711TPm9aXS4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDmtjiJFxkigrITNrnwG9htxZ6A0g",
              width: 720,
            },
          ],
          title: "The NEW TUGBOATS are INSANELY FUN (Couples Survival) - Rust",
          videoId: "711TPm9aXS4",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/ytc/AOPolaT2Hgx7cT3RgylkVswiHuNPqjBdI6KVPtosb8U1eA=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@suntv",
            channelId: "UCBnxEdpoZwstJqC1yZpOjRA",
            title: "Sun TV",
          },
          badges: ["4K"],
          descriptionSnippet:
            'Watch the official lyric video of the much anticipated, high-octane first single "Kaavaalaa" from the movie "Jailer". Starring ...',
          isLiveNow: false,
          lengthSeconds: 193,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/RVLNBVK8auM/mqdefault_6s.webp?du=3000&sqp=CIzU-aUG&rs=AOn4CLDyZJpaH11RxvC6DCE91DNq3DtmIw",
              width: 320,
            },
          ],
          publishedTimeText: "2 weeks ago",
          stats: {
            views: 67630872,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/RVLNBVK8auM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOuHFm0hRE0N6aTs5CF7REJgM8Iw",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/RVLNBVK8auM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnZZoIcEufzqaWboiSH8qlozHE9w",
              width: 720,
            },
          ],
          title:
            "JAILER - Kaavaalaa Lyric Video | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson | Tamannaah",
          videoId: "RVLNBVK8auM",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@SaregamaMusic",
            channelId: "UC_A7K2dXFsTMAciGmnNxy-Q",
            title: "Saregama Music",
          },
          badges: ["4K", "CC"],
          descriptionSnippet:
            "TereVaaste is here and it's sure to tug at your heartstrings starring Vicky Kaushal and Sara Ali Khan. The song has been sung by ...",
          isLiveNow: false,
          lengthSeconds: 182,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/X7WXHhokylc/mqdefault_6s.webp?du=3000&sqp=CJjO-aUG&rs=AOn4CLAK-1huQMe4q5eUWO1UPxjAEJ8MsQ",
              width: 320,
            },
          ],
          publishedTimeText: "2 months ago",
          stats: {
            views: 200442875,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/X7WXHhokylc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUWHS5T-sSrhpqmj9wMwhcNbHg1A",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/X7WXHhokylc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwQ2VI_Csqs1Dv-c_tA_AFo7z81A",
              width: 720,
            },
          ],
          title:
            "Tere Vaaste | Zara Hatke Zara Bachke | Vicky Kaushal, Sara Ali Khan, Varun J, Sachin-Jigar,Amitabh B",
          videoId: "X7WXHhokylc",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/MjEWybBlBXVZigapX__tR_PyJRx-_OGwEZfWZKyS_jJrlgeeF67h69wN2HOhFohiDA7YNeIG=s88-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Official Artist Channel",
                type: "OFFICIAL_ARTIST_CHANNEL",
              },
            ],
            canonicalBaseUrl: null,
            channelId: "UCZFWPqqPkFlNwIxcpsLOwew",
            title: "Harry Styles",
          },
          badges: ["New", "4K"],
          descriptionSnippet:
            "Credits: Made with love by a creative team from Ukraine. Director: Tanu Muino Producers: Bryan Younce, Frank Borin, Ivanna ...",
          isLiveNow: false,
          lengthSeconds: 167,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/-UJCMfuFtSQ/mqdefault_6s.webp?du=3000&sqp=CLjf-aUG&rs=AOn4CLDtgGIdDMvOQlW0-Qr2vYQ1LS3G_w",
              width: 320,
            },
          ],
          publishedTimeText: "4 days ago",
          stats: {
            views: 6108124,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/-UJCMfuFtSQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyjbK5TdjNqkmUyN5ta8vchCvqwQ",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/-UJCMfuFtSQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH0sdptpubuVVkWZ59mOis1XkBGQ",
              width: 720,
            },
          ],
          title: "Harry Styles - Daylight (Official Video)",
          videoId: "-UJCMfuFtSQ",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/dxED1O-r5cRS73JBlUk4VS3pZHDfiHcuRjRbFMcf6KgYhxP4NUlD7x0h4TR1XTXkl-JGjTPTYQ=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@SaregamaMusic",
            channelId: "UC_A7K2dXFsTMAciGmnNxy-Q",
            title: "Saregama Music",
          },
          badges: ["New", "4K"],
          descriptionSnippet:
            "Experience the pure emotions of love with Ve Kamleya, a soul-stirring Bollywood melody by Arijit Singh, Shreya Ghoshal, Shadab ...",
          isLiveNow: false,
          lengthSeconds: 190,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/QXJyMpxd210/mqdefault_6s.webp?du=3000&sqp=CIXN-aUG&rs=AOn4CLA4jVyrCjOP1rPrLWMGhJeYmKljPA",
              width: 320,
            },
          ],
          publishedTimeText: "6 days ago",
          stats: {
            views: 12811613,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/QXJyMpxd210/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmXa3bXtwzdgxd5EjIksF9HrbuxQ",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/QXJyMpxd210/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBdFO4TIBqLQDHY9dcQcvCUyJlohA",
              width: 720,
            },
          ],
          title:
            "Ve Kamleya | Rocky Aur Rani Kii Prem Kahaani | Ranveer | Alia | Pritam | Amitabh | Arijit | Shreya",
          videoId: "QXJyMpxd210",
        },
      },
      {
        type: "video",
        video: {
          author: {
            avatar: [
              {
                height: 68,
                url: "https://yt3.ggpht.com/VY4DYRWFYKJUU9jbhfUmQdiDdlI4pCwDvx81Wv7JLf-bYRuhd5xoLl6DpExtud-B1_jNU2ViYA=s68-c-k-c0x00ffffff-no-rj",
                width: 68,
              },
            ],
            badges: [
              {
                text: "Verified",
                type: "VERIFIED_CHANNEL",
              },
            ],
            canonicalBaseUrl: "/@MSA.official",
            channelId: "UCYzEMRKqrh01-tauv7MYyVQ",
            title: "MSA previously My Story Animated",
          },
          badges: ["New"],
          descriptionSnippet:
            "Subscribe now to join our MSA family! Follow us on Instagram @my.story.animated for exclusive content, teasers for upcoming ...",
          isLiveNow: false,
          lengthSeconds: 760,
          movingThumbnails: [
            {
              height: 180,
              url: "https://i.ytimg.com/an_webp/IurK9gGZ09w/mqdefault_6s.webp?du=3000&sqp=CNzT-aUG&rs=AOn4CLC3goDlApc2TtIbT0zXwxNUAuko6A",
              width: 320,
            },
          ],
          publishedTimeText: "4 days ago",
          stats: {
            views: 3819796,
          },
          thumbnails: [
            {
              height: 202,
              url: "https://i.ytimg.com/vi/IurK9gGZ09w/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOlf-y641KWE2ufTYldldQP_dY4w",
              width: 360,
            },
            {
              height: 404,
              url: "https://i.ytimg.com/vi/IurK9gGZ09w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAzuaoOscHwob31WbYVWXKLE5xbQ",
              width: 720,
            },
          ],
          title: "5,000 Miles For 10 Million Dollars, The Journey Begins",
          videoId: "IurK9gGZ09w",
        },
      },
    ],
    cursorNext:
      "EqQDEgNOZXcanANTQlNDQVF0aVVqTnZZbGRQTXpoUFRZSUJDM2RVZERKdE1YcEJiaTF6Z2dFTFNsVm1Ua1JDYWtSbVVGR0NBUXR4YkMxQ2EzTTFZbkZIT0lJQkN5MUtNVnBXUjFCTU9VdGpnZ0VMYUVacVQwb3RiWFZQTWxHQ0FRdHJTM05wZG5KbmIzbEVkNElCQ3preE9HOUhTa1owYW1wM2dnRUxMVTlsY3pnNVR6Vm5iVFNDQVF0UlNrYzBZMWR0V1ROQ1NZSUJDMkpETXpaa09HVXpZbUl3Z2dFWVZVTldPVVo0VTNKUVZrVllNM1pxUW1GNE1EUldYM1ZCZ2dFTGEyTmxiR2R5UjFreGFEaUNBUXRCY20xRWNDMTZhV3AxWTRJQkN6Y3hNVlJRYlRsaFdGTTBnZ0VMVWxaTVRrSldTemhoZFUyQ0FRdFlOMWRZU0dodmEzbHNZNElCQ3kxVlNrTk5ablZHZEZOUmdnRUxVVmhLZVUxd2VHUXlNVENDQVF0SmRYSkxPV2RIV2pBNWQ3SUJCZ29FQ0JjUUF1b0JBZ2dDGIHg6BgiC3NlYXJjaC1mZWVk",
    didYouMean: null,
    estimatedResults: 28419703062,
    filterGroups: null,
    refinements: [],
  };
  console.log(`${BASE_URL}/${url}`, options);
  const data = dummy_data;
  // const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

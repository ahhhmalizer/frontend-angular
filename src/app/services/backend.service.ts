import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  getAnalayze() {
    return {
      partition: 'some_partition',
      description: 'some_description',
      privacyMode: 'Private',
      state: 'Processed',
      accountId: '436182c5-6687-44e5-aaaf-57142645bb7e',
      id: '38f08a8043',
      name: 'some_name',
      userName: 'Annegret Wittig',
      created: '2019-04-13T03:01:23.5729236+00:00',
      isOwned: true,
      isEditable: true,
      isBase: true,
      durationInSeconds: 10,
      summarizedInsights: {
        name: 'some_name',
        id: '38f08a8043',
        privacyMode: 'Private',
        duration: {
          time: '0:00:10.048',
          seconds: 10
        },
        thumbnailVideoId: '38f08a8043',
        thumbnailId: '21a63487-de69-4fec-818d-93ded484de80',
        faces: [],
        keywords: [],
        sentiments: [],
        emotions: [],
        audioEffects: [],
        labels: [
          {
            id: 0,
            name: 'grass',
            appearances: [
              {
                startTime: '0:00:00',
                endTime: '0:00:09.04',
                startSeconds: 0,
                endSeconds: 9
              }
            ]
          },
          {
            id: 1,
            name: 'outdoor',
            appearances: [
              {
                startTime: '0:00:03.84',
                endTime: '0:00:09.04',
                startSeconds: 3.8,
                endSeconds: 9
              }
            ]
          },
          {
            id: 2,
            name: 'sky',
            appearances: [
              {
                startTime: '0:00:03.84',
                endTime: '0:00:09.04',
                startSeconds: 3.8,
                endSeconds: 9
              }
            ]
          },
          {
            id: 4,
            name: 'mammal',
            appearances: [
              {
                startTime: '0:00:03.84',
                endTime: '0:00:07.68',
                startSeconds: 3.8,
                endSeconds: 7.7
              }
            ]
          },
          {
            id: 5,
            name: 'field',
            appearances: [
              {
                startTime: '0:00:05.12',
                endTime: '0:00:09.04',
                startSeconds: 5.1,
                endSeconds: 9
              }
            ]
          },
          {
            id: 3,
            name: 'animal',
            appearances: [
              {
                startTime: '0:00:03.84',
                endTime: '0:00:05.12',
                startSeconds: 3.8,
                endSeconds: 5.1
              }
            ]
          },
          {
            id: 6,
            name: 'sheep',
            appearances: [
              {
                startTime: '0:00:06.4',
                endTime: '0:00:07.68',
                startSeconds: 6.4,
                endSeconds: 7.7
              }
            ]
          }
        ],
        brands: [],
        statistics: {
          correspondenceCount: 0,
          speakerTalkToListenRatio: {
            1: 1
          },
          speakerLongestMonolog: {
            1: 10
          },
          speakerNumberOfFragments: {
            1: 1
          },
          speakerWordCount: {
            1: 1
          }
        },
        topics: []
      },
      videos: [
        {
          accountId: '436182c5-6687-44e5-aaaf-57142645bb7e',
          id: '38f08a8043',
          state: 'Processed',
          moderationState: 'OK',
          reviewState: 'None',
          privacyMode: 'Private',
          processingProgress: '100%',
          failureCode: 'None',
          failureMessage: '',
          externalId: null,
          externalUrl: null,
          metadata: null,
          insights: {
            version: '1.0.0.0',
            duration: '0:00:10.048',
            sourceLanguage: 'en-US',
            language: 'en-US',
            transcript: [
              {
                id: 0,
                text: '',
                confidence: 0,
                speakerId: 1,
                language: 'en-US',
                instances: [
                  {
                    adjustedStart: '0:00:00',
                    adjustedEnd: '0:00:10.008',
                    start: '0:00:00',
                    end: '0:00:10.008'
                  }
                ]
              }
            ],
            labels: [
              {
                id: 0,
                name: 'grass',
                referenceId: 'plant/herb/grass',
                language: 'en-US',
                instances: [
                  {
                    confidence: 0.9927,
                    adjustedStart: '0:00:00',
                    adjustedEnd: '0:00:07.76',
                    start: '0:00:00',
                    end: '0:00:07.76'
                  },
                  {
                    confidence: 0.9996,
                    adjustedStart: '0:00:08.96',
                    adjustedEnd: '0:00:09.04',
                    start: '0:00:08.96',
                    end: '0:00:09.04'
                  }
                ]
              },
              {
                id: 1,
                name: 'outdoor',
                referenceId: null,
                language: 'en-US',
                instances: [
                  {
                    confidence: 0.9768,
                    adjustedStart: '0:00:03.84',
                    adjustedEnd: '0:00:07.76',
                    start: '0:00:03.84',
                    end: '0:00:07.76'
                  },
                  {
                    confidence: 0.9925,
                    adjustedStart: '0:00:08.96',
                    adjustedEnd: '0:00:09.04',
                    start: '0:00:08.96',
                    end: '0:00:09.04'
                  }
                ]
              },
              {
                id: 2,
                name: 'sky',
                referenceId: 'atmosphere/sky',
                language: 'en-US',
                instances: [
                  {
                    confidence: 0.9996,
                    adjustedStart: '0:00:03.84',
                    adjustedEnd: '0:00:07.76',
                    start: '0:00:03.84',
                    end: '0:00:07.76'
                  },
                  {
                    confidence: 0.9994,
                    adjustedStart: '0:00:08.96',
                    adjustedEnd: '0:00:09.04',
                    start: '0:00:08.96',
                    end: '0:00:09.04'
                  }
                ]
              },
              {
                id: 3,
                name: 'animal',
                referenceId: 'organism/animal',
                language: 'en-US',
                instances: [
                  {
                    confidence: 0.9139,
                    adjustedStart: '0:00:03.84',
                    adjustedEnd: '0:00:05.12',
                    start: '0:00:03.84',
                    end: '0:00:05.12'
                  }
                ]
              },
              {
                id: 4,
                name: 'mammal',
                referenceId: 'animal/mammal',
                language: 'en-US',
                instances: [
                  {
                    confidence: 0.8858,
                    adjustedStart: '0:00:03.84',
                    adjustedEnd: '0:00:07.68',
                    start: '0:00:03.84',
                    end: '0:00:07.68'
                  }
                ]
              },
              {
                id: 5,
                name: 'field',
                referenceId: 'geographical area/field',
                language: 'en-US',
                instances: [
                  {
                    confidence: 0.8412,
                    adjustedStart: '0:00:05.12',
                    adjustedEnd: '0:00:07.76',
                    start: '0:00:05.12',
                    end: '0:00:07.76'
                  },
                  {
                    confidence: 0.8874,
                    adjustedStart: '0:00:08.96',
                    adjustedEnd: '0:00:09.04',
                    start: '0:00:08.96',
                    end: '0:00:09.04'
                  }
                ]
              },
              {
                id: 6,
                name: 'sheep',
                referenceId: 'animal/mammal/sheep',
                language: 'en-US',
                instances: [
                  {
                    confidence: 0.8354,
                    adjustedStart: '0:00:06.4',
                    adjustedEnd: '0:00:07.68',
                    start: '0:00:06.4',
                    end: '0:00:07.68'
                  }
                ]
              }
            ],
            scenes: [
              {
                id: 0,
                instances: [
                  {
                    adjustedStart: '0:00:00.24',
                    adjustedEnd: '0:00:04.16',
                    start: '0:00:00.24',
                    end: '0:00:04.16'
                  }
                ]
              }
            ],
            shots: [
              {
                id: 0,
                keyFrames: [
                  {
                    id: 0,
                    instances: [
                      {
                        thumbnailId: '08515e0c-85df-424e-9125-14bd12a18ce6',
                        adjustedStart: '0:00:00.24',
                        adjustedEnd: '0:00:00.28',
                        start: '0:00:00.24',
                        end: '0:00:00.28'
                      }
                    ]
                  },
                  {
                    id: 1,
                    instances: [
                      {
                        thumbnailId: 'e49156eb-93be-4474-aba1-0892d46ea3fc',
                        adjustedStart: '0:00:02.08',
                        adjustedEnd: '0:00:02.12',
                        start: '0:00:02.08',
                        end: '0:00:02.12'
                      }
                    ]
                  }
                ],
                instances: [
                  {
                    adjustedStart: '0:00:00',
                    adjustedEnd: '0:00:04.08',
                    start: '0:00:00',
                    end: '0:00:04.08'
                  }
                ]
              },
              {
                id: 1,
                keyFrames: [
                  {
                    id: 2,
                    instances: [
                      {
                        thumbnailId: 'ddb9b91b-a1b0-4206-91b2-7b0cbc280996',
                        adjustedStart: '0:00:04.08',
                        adjustedEnd: '0:00:04.12',
                        start: '0:00:04.08',
                        end: '0:00:04.12'
                      }
                    ]
                  }
                ],
                instances: [
                  {
                    adjustedStart: '0:00:04.08',
                    adjustedEnd: '0:00:04.16',
                    start: '0:00:04.08',
                    end: '0:00:04.16'
                  }
                ]
              }
            ],
            blocks: [
              {
                id: 0,
                instances: [
                  {
                    adjustedStart: '0:00:00',
                    adjustedEnd: '0:00:10.008',
                    start: '0:00:00',
                    end: '0:00:10.008'
                  }
                ]
              }
            ],
            speakers: [
              {
                id: 1,
                name: 'Speaker #1',
                instances: [
                  {
                    adjustedStart: '0:00:00.01',
                    adjustedEnd: '0:00:04.18',
                    start: '0:00:00.01',
                    end: '0:00:04.18'
                  }
                ]
              },
              {
                id: 2,
                name: 'Speaker #2',
                instances: [
                  {
                    adjustedStart: '0:00:04.18',
                    adjustedEnd: '0:00:08.12',
                    start: '0:00:04.18',
                    end: '0:00:08.12'
                  }
                ]
              }
            ],
            textualContentModeration: {
              id: 0,
              bannedWordsCount: 0,
              bannedWordsRatio: 0,
              instances: []
            },
            statistics: {
              correspondenceCount: 0,
              speakerTalkToListenRatio: {
                1: 1
              },
              speakerLongestMonolog: {
                1: 10
              },
              speakerNumberOfFragments: {
                1: 1
              },
              speakerWordCount: {
                1: 1
              }
            },
            sourceLanguageConfidence: 1
          },
          thumbnailId: '21a63487-de69-4fec-818d-93ded484de80',
          publishedUrl:
            'https://rodmandev.streaming.mediaservices.windows.net:443/b0d7ddcd-11ab-4229-ac6b-c060af74ae09/6cfe2110-1a2d-4a41-8405-46eb626b.ism/manifest(encryption=cbc)',
          publishedProxyUrl: null,
          viewToken:
            'Bearer=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cm46bWljcm9zb2Z0OmF6dXJlOm1lZGlhc2VydmljZXM6Y29udGVudGtleWlkZW50aWZpZXIiOiI5NTM2NDgyMC0yM2E4LTRlN2YtODZhNS0wZTk0OTJiYWZjZjAiLCJpc3MiOiJodHRwczovL2JyZWFrZG93bi5tZSIsImF1ZCI6IkJyZWFrZG93blVzZXIiLCJleHAiOjE1NTUyMTA5OTQsIm5iZiI6MTU1NTEyNDUzNH0.Chp7jxbsqwd-_eyXbQz95WxRVIYgpq4-Bgy7hE_Lxms',
          detectSourceLanguage: false,
          sourceLanguage: 'en-US',
          language: 'en-US',
          indexingPreset: 'Default',
          linguisticModelId: '00000000-0000-0000-0000-000000000000',
          personModelId: '00000000-0000-0000-0000-000000000000',
          isAdult: false
        }
      ],
      videosRanges: [
        {
          videoId: '38f08a8043',
          range: {
            start: '0:00:00',
            end: '0:00:10.048'
          }
        }
      ]
    };
  }
}

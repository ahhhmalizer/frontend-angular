import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { BackendService, Evaluation } from 'src/app/services/backend.service';

export class LoadEvaluation {
  static readonly type = '[App State] SetEvaluation';
  constructor(public videoUrl: string) {}
}

export class SetProgress {
  static readonly type = '[App State] SetProgress';
  constructor(public progress: number) {}
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    evaluation: getDefaultEvaluation(),
    progress: -1,
    uploaded: false,
    analyzed: false,
    videoUrl: 'https://ahhhmalizerstorage.blob.core.windows.net/test/t_video5298516770129183463.mp4'
  }
})
export class AppState {
  constructor(private backendService: BackendService) {}

  @Selector()
  static evaluation(state: AppStateModel): any {
    return state.evaluation;
  }

  @Action(LoadEvaluation)
  public loadEvaluation(ctx: StateContext<AppStateModel>, action: LoadEvaluation) {
    ctx.patchState({
      uploaded: true,
      videoUrl: action.videoUrl
    });
    return this.backendService.getAnalayze(action.videoUrl).subscribe(
      data => {
        ctx.patchState({
          evaluation: data,
          analyzed: true
        });
      },
      error => {
        ctx.patchState({
          analyzed: true,
          evaluation: getDefaultEvaluation()
        });
      }
    );
  }

  @Action(SetProgress)
  public setProgress(ctx: StateContext<AppStateModel>, action: SetProgress) {
    ctx.patchState({
      progress: action.progress
    });
  }
}

export interface AppStateModel {
  evaluation: Evaluation;
  progress: number;
  uploaded: boolean;
  analyzed: boolean;
  videoUrl: string;
}

function getDefaultEvaluation() {
  return {
    time: '0:00:51.115',
    words: 29,
    umCount: 0,
    sentiments: [
      { name: 'Negative', value: 0.0665 },
      { name: 'Neutral', value: 0.8099 },
      { name: 'Positive', value: 0.1213 }
    ],
    audioEffects: [],
    wordCount: [
      { name: 'it', value: 6 },
      { name: 'i', value: 5 },
      { name: 's', value: 5 },
      { name: 'the', value: 4 },
      { name: 'you', value: 4 },
      { name: 'to', value: 3 },
      { name: 'are', value: 3 },
      { name: 'we', value: 3 },
      { name: 'just', value: 3 },
      { name: 'about', value: 3 },
      { name: 'fine', value: 3 },
      { name: 'go', value: 3 },
      { name: 'really', value: 2 },
      { name: 'like', value: 2 },
      { name: 'out', value: 2 },
      { name: 'that', value: 2 },
      { name: 'is', value: 2 },
      { name: 'serious', value: 2 },
      { name: 'yeah', value: 2 },
      { name: 'get', value: 2 },
      { name: 'let', value: 2 },
      { name: 'days', value: 1 },
      { name: 'were', value: 1 },
      { name: 'emotional', value: 1 },
      { name: 'saying', value: 1 },
      { name: 'goodbye', value: 1 },
      { name: 'love', value: 1 },
      { name: 'cast', value: 1 },
      { name: 'because', value: 1 },
      { name: 'when', value: 1 },
      { name: 'found', value: 1 },
      { name: 'aria', value: 1 },
      { name: 'died', value: 1 },
      { name: 'in', value: 1 },
      { name: 'second', value: 1 },
      { name: 'episode', value: 1 },
      { name: 'was', value: 1 },
      { name: 'what', value: 1 },
      { name: 'kidding', value: 1 },
      { name: 'me', value: 1 },
      { name: 'spoiler', value: 1 },
      { name: 'this', value: 1 },
      { name: 'life', value: 1 },
      { name: 'no', value: 1 },
      { name: 'can', value: 1 },
      { name: 'answer', value: 1 },
      { name: 'dude', value: 1 },
      { name: 'totally', value: 1 },
      { name: 'looking', value: 1 },
      { name: 'tweet', value: 1 }
    ],
    articulation: [
      { confidence: 0.9053, start: '0:00:00' },
      { confidence: 0.9053, start: '0:00:03.45' },
      { confidence: 0.9053, start: '0:00:08.02' },
      { confidence: 1, start: '0:00:08.38' },
      { confidence: 0.7107, start: '0:00:10.86' },
      { confidence: 1, start: '0:00:12.62' },
      { confidence: 0.8285, start: '0:00:15.1' },
      { confidence: 0.8286, start: '0:00:20.23' },
      { confidence: 0.8927, start: '0:00:24.45' },
      { confidence: 0.7648, start: '0:00:26.69' },
      { confidence: 0.7648, start: '0:00:30.46' },
      { confidence: 0.7648, start: '0:00:32.21' },
      { confidence: 0.7648, start: '0:00:34.58' },
      { confidence: 0.3569, start: '0:00:36.9' },
      { confidence: 0.6577, start: '0:00:38.53' },
      { confidence: 0.7822, start: '0:00:41.93' },
      { confidence: 0.7282, start: '0:00:44.79' }
    ],
    grade: 40
  };
}

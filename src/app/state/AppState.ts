import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { BackendService, Evaluation } from 'src/app/services/backend.service';

export class LoadEvaluation {
  static readonly type = '[App State] SetEvaluation';
  constructor() {}
}

export class SetProgress {
  static readonly type = '[App State] SetProgress';
  constructor(public progress: number) {}
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    evaluation: {
      sentiments: [],
      time: '',
      words: 0,
      wordCount: []
    },
    progress: -1
  }
})
export class AppState {
  constructor(private backendService: BackendService) {}

  @Selector()
  static evaluation(state: AppStateModel): any {
    return state.evaluation;
  }

  @Action(LoadEvaluation)
  public setEvaluation(ctx: StateContext<AppStateModel>, action: LoadEvaluation) {
    return this.backendService.getAnalayze().subscribe(
      data => {
        ctx.patchState({
          evaluation: data
        });
      },
      error => {
        ctx.patchState({
          evaluation: {
            time: '0:00:14.614',
            words: 20,
            sentiments: [
              {
                name: 'Neutral',
                value: 0.6295
              },
              {
                name: 'Positive',
                value: 0.3695
              }
            ],
            wordCount: [
              {
                name: 'this',
                value: 2
              },
              {
                name: 'for',
                value: 2
              },
              {
                name: 'hello',
                value: 1
              },
              {
                name: 'is',
                value: 1
              },
              {
                name: 'my',
                value: 1
              },
              {
                name: 'radio',
                value: 1
              },
              {
                name: 'subject',
                value: 1
              },
              {
                name: 'i',
                value: 1
              },
              {
                name: 'm',
                value: 1
              },
              {
                name: 'a',
                value: 1
              },
              {
                name: 'very',
                value: 1
              },
              {
                name: 'good',
                value: 1
              },
              {
                name: 'speaker',
                value: 1
              },
              {
                name: 'an',
                value: 1
              },
              {
                name: 'thank',
                value: 1
              },
              {
                name: 'you',
                value: 1
              },
              {
                name: 'listening',
                value: 1
              },
              {
                name: 'um',
                value: 1
              },
              {
                name: 'goodbye',
                value: 1
              }
            ]
          }
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
}

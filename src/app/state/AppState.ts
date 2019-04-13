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
      sentiments: []
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
            sentiments: [
              {
                name: 'Neutral',
                value: 0.6295
              },
              {
                name: 'Positive',
                value: 0.3695
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

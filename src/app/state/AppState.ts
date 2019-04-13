import { Action, Selector, State, StateContext, Store } from '@ngxs/store';

export class SetEvaluation {
  static readonly type = '[App State] SetEvaluation';
  constructor(public evaluation: any) {}
}

export class SetProgress {
  static readonly type = '[App State] SetProgress';
  constructor(public progress: number) {}
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    evaluation: '',
    progress: -1
  }
})
export class AppState {
  constructor() {}

  @Selector()
  static evaluation(state: AppStateModel): any {
    return state.evaluation;
  }

  @Action(SetEvaluation)
  public setEvaluation(ctx: StateContext<AppStateModel>, action: SetEvaluation) {
    ctx.patchState({
      evaluation: action.evaluation
    });
  }

  @Action(SetProgress)
  public setProgress(ctx: StateContext<AppStateModel>, action: SetProgress) {
    ctx.patchState({
      progress: action.progress
    });
  }
}

export interface AppStateModel {
  evaluation: any;
  progress: number;
}

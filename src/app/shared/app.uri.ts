import {AppNode} from './app.node';

export enum AppRoutes {
  AUTHENTICATED = `/${AppNode.AUTHENTICATED}`,
  MEMBER = `${AppRoutes.AUTHENTICATED}/${AppNode.MEMBER}`,
  MEMBER_DETAIL = `${AppRoutes.MEMBER}/detail/`
}

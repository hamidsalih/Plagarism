import * as graphql from "@nestjs/graphql";
import { AlgorithmResolverBase } from "./base/algorithm.resolver.base";
import { Algorithm } from "./base/Algorithm";
import { AlgorithmService } from "./algorithm.service";

@graphql.Resolver(() => Algorithm)
export class AlgorithmResolver extends AlgorithmResolverBase {
  constructor(protected readonly service: AlgorithmService) {
    super(service);
  }
}

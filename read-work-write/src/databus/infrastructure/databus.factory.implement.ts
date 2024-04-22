import { parseConnectionString } from "src/common/helpers/connection-string";
import { DataBus } from "../domain/databus";
import { CreateDataBusOptions, DataBusFactory } from "../domain/databus.factory";
import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import * as util from 'node:util';
import { DataBusErrors } from "../errors";
import { EventPublisher } from "@nestjs/cqrs";
import { StdDataBus } from "./protocols/std.databus";

@Injectable()
export class DataBusFactoryImplement implements DataBusFactory {
    private readonly classMap = {
        'std': StdDataBus,
    }
    
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher;

    create(options: CreateDataBusOptions): DataBus {
        const {protocol, connectionOptions} = parseConnectionString(options.connectionString);
        if (!this.classMap[protocol]) {
            throw new BadRequestException(util.format(DataBusErrors.UNKNOWN_PROTOCOL, protocol))
        }

        return this.eventPublisher.mergeObjectContext(
            new this.classMap[protocol](connectionOptions)
        );
    }

}
import { DynamicModule } from '@nestjs/common';
import { ConnectionOptions } from 'typeorm';
export declare class AppModule {
    static forRoot(connOptions: ConnectionOptions): DynamicModule;
}

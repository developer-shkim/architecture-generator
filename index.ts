#!/usr/bin/env node

import { Command } from 'commander';
import * as shell from 'shelljs';

const program = new Command();

program
  .command('print')
  .description('Print the message in your console')
  .argument('<string>', 'input the message to print')
  .option('-c --capitalize', 'Capitalize the message')
  .action((message, options) => {
    if (options.capitalize) {
      console.log(message.toUpperCase());
    } else {
      console.log(message);
    }
  });

const dirs = [
  'src/app/account/adapter/in/web',
  'src/app/account/adapter/out/persistence',
  'src/app/account/application/port/in',
  'src/app/account/application/port/out',
  'src/app/account/application/service',
  'src/app/account/domain',
  'src/app/common',
  'src/app/resources',
  'src/test/account/adapter/in/web',
  'src/test/account/adapter/out/persistence',
  'src/test/account/application/service',
  'src/test/account/domain',
  'src/test/common',
  'src/test/resources',
];

const files = [
  'src/app/account/adapter/in/web/controller.ts',
  'src/app/account/adapter/out/persistence/entity.ts',
  'src/app/account/adapter/out/persistence/mapper.ts',
  'src/app/account/adapter/out/persistence/persistence-adapter.ts',
  'src/app/account/adapter/out/persistence/repository.ts',
  'src/app/account/application/port/in/command.ts',
  'src/app/account/application/port/in/query.ts',
  'src/app/account/application/port/in/usecase.ts',
  'src/app/account/application/port/out/port.ts',
  'src/app/account/application/service/service.ts',
  'src/app/account/domain/entity.ts',
  'src/test/account/adapter/in/web/controller.test.ts',
  'src/test/account/adapter/out/persistence/persistence-adapter.test.ts',
  'src/test/account/application/service/service.test.ts',
  'src/test/account/domain/entity.test.ts',
];

// TODO: nest new command 와 호환되도록 수정
program
  .command('init')
  .description('create sample dirs and files')
  .action((_) => {
    shell.mkdir('-p', dirs);
    shell.touch(files);
  });

program.parse();

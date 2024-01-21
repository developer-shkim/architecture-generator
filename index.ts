import { Command } from 'commander';

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

program.parse();

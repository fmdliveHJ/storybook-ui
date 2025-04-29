import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@ui/accordion/src';

import { Text } from '@ui/layout/src';

export default {
  title: 'React Components/Accordion',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const AccordionStory = {
  render: () => (
    <Accordion defaultActiveItems={['목록1']} style={{ width: '500px' }}>
      <AccordionItem itemName='목록1'>
        <AccordionButton itemName='목록1'>목록 1</AccordionButton>
        <AccordionPanel itemName='목록1'>
          <Text color='gray' fontSize='md'>
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem itemName='목록2'>
        <AccordionButton itemName='목록2'>목록 2</AccordionButton>
        <AccordionPanel itemName='목록2'>
          <Text color='gray' fontSize='md'>
            내용입니다.
            <br />
            내용입니다.
          </Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  ),
};

import { Box, Flex, Grid, Text } from "@radix-ui/themes";

export const Page1 = () =>    
<Grid columns={{
    initial: '1',
    xs: '2',
    sm: '3'}} 
    gap="3">
  <Flex direction="column" gap="3">
    <Box height="5" style={{backgroundColor: '#ff2d55'}}>
        <Text align={'center'} as="p">A</Text>
    </Box>
    <Box height="7" style={{backgroundColor: '#5856d6'}}>
        <Text align='center' as="p">B</Text>
    </Box>
    <Box height="9" style={{backgroundColor: '#ff9500'}}>
        <Text align={'center'} as="p">C</Text>
    </Box>
  </Flex>

  <Flex direction="column" gap="3">
    <Box grow="1" style={{backgroundColor: '#ffcc00'}}>
        <Text align={'center'} as="p">D</Text>
    </Box>
    <Box height="6" style={{backgroundColor: '#007aff'}}>
        <Text align={'center'} as="p">E</Text>
    </Box>
  </Flex>
</Grid>




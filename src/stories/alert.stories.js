import React from 'react';
import { storiesOf } from '@storybook/react';

import Alert from '../components/groups/Alert/alert';
import AlertCollapsable from '../components/groups/Alert/alertCollapsable';
import Text from '../components/blocks/typography/text';

storiesOf('Alert', module)
    .add('Danger', () => {
        return (
            <Alert type="danger">
                <Alert.primaryTitle align="center">Header title</Alert.primaryTitle>
                <Alert.primaryContent>
                    <Text.Small>
                        Earum vero iusto quos dolores magnam quis dolore. Magni necessitatibus officiis sed deleniti architecto et esse. Non consequatur ut. Expedita voluptatem deleniti soluta inventore autem consequatur.
                        Aut eius magnam laborum et sint quidem est eos quis. Numquam aut impedit sit doloremque. Asperiores ratione alias reiciendis. Assumenda molestiae laudantium doloribus ut iste sunt eum. Perspiciatis repudiandae tenetur optio suscipit impedit quos sed. Reprehenderit qui quaerat molestias qui libero inventore.
                        Expedita eum occaecati esse quae excepturi. Accusamus expedita et tempora ea ab eaque inventore beatae. Deleniti ut voluptatibus dicta. Perferendis sit omnis autem iusto id. Illo exercitationem itaque. Fugiat debitis blanditiis libero.
                    </Text.Small>
                </Alert.primaryContent>
                <AlertCollapsable>
                    <AlertCollapsable.primaryTitle align="center">`VERY CRYPTIC MESSAGE!`</AlertCollapsable.primaryTitle>
                    <AlertCollapsable.primaryContent>
                        <Text.Small>
                            Earum vero iusto quos dolores magnam quis dolore. Magni necessitatibus officiis sed deleniti architecto et esse. Non consequatur ut. Expedita voluptatem deleniti soluta inventore autem consequatur.
                            Aut eius magnam laborum et sint quidem est eos quis. Numquam aut impedit sit doloremque. Asperiores ratione alias reiciendis. Assumenda molestiae laudantium doloribus ut iste sunt eum. Perspiciatis repudiandae tenetur optio suscipit impedit quos sed. Reprehenderit qui quaerat molestias qui libero inventore.
                            Expedita eum occaecati esse quae excepturi. Accusamus expedita et tempora ea ab eaque inventore beatae. Deleniti ut voluptatibus dicta. Perferendis sit omnis autem iusto id. Illo exercitationem itaque. Fugiat debitis blanditiis libero.
                        </Text.Small>
                    </AlertCollapsable.primaryContent>
                </AlertCollapsable>
            </Alert>
        );
    })
    .add('Success', () => {
        return (
            <Alert type="success" >
                <Alert.primaryTitle align="center">Header title</Alert.primaryTitle>
                <Alert.primaryContent>
                    <Text.Small>
                        Earum vero iusto quos dolores magnam quis dolore. Magni necessitatibus officiis sed deleniti architecto et esse. Non consequatur ut. Expedita voluptatem deleniti soluta inventore autem consequatur.
                        Aut eius magnam laborum et sint quidem est eos quis. Numquam aut impedit sit doloremque. Asperiores ratione alias reiciendis. Assumenda molestiae laudantium doloribus ut iste sunt eum. Perspiciatis repudiandae tenetur optio suscipit impedit quos sed. Reprehenderit qui quaerat molestias qui libero inventore.
                        Expedita eum occaecati esse quae excepturi. Accusamus expedita et tempora ea ab eaque inventore beatae. Deleniti ut voluptatibus dicta. Perferendis sit omnis autem iusto id. Illo exercitationem itaque. Fugiat debitis blanditiis libero.
                    </Text.Small>
                </Alert.primaryContent>
                <AlertCollapsable>
                    <AlertCollapsable.primaryTitle align="center">`VERY CRYPTIC MESSAGE!`</AlertCollapsable.primaryTitle>
                    <AlertCollapsable.primaryContent>
                        <Text.Small>
                            Earum vero iusto quos dolores magnam quis dolore. Magni necessitatibus officiis sed deleniti architecto et esse. Non consequatur ut. Expedita voluptatem deleniti soluta inventore autem consequatur.
                            Aut eius magnam laborum et sint quidem est eos quis. Numquam aut impedit sit doloremque. Asperiores ratione alias reiciendis. Assumenda molestiae laudantium doloribus ut iste sunt eum. Perspiciatis repudiandae tenetur optio suscipit impedit quos sed. Reprehenderit qui quaerat molestias qui libero inventore.
                            Expedita eum occaecati esse quae excepturi. Accusamus expedita et tempora ea ab eaque inventore beatae. Deleniti ut voluptatibus dicta. Perferendis sit omnis autem iusto id. Illo exercitationem itaque. Fugiat debitis blanditiis libero.
                        </Text.Small>
                    </AlertCollapsable.primaryContent>
                </AlertCollapsable>
            </Alert>
        );
    });


/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global getAssetRegistry getFactory emit */

/**
 * Sample transaction processor function.
 * @param {autenticacao.diploma.SampleTransaction} tx The sample transaction instance.
 * @transaction
 */
async function sampleTransaction(tx) {  // eslint-disable-line no-unused-vars

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('autenticacao.diploma.Diploma');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('autenticacao.diploma', 'SampleEvent');
    event.asset = tx.asset;
    event.Curso = tx.Curso;
   event.Ano = tx.Ano;
   event.Nome = tx.Nome;
   event.Faculdade = tx.Faculdade;
   event.Hash = tx.Hash;
    emit(event);
}
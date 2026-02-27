💈 BarberPro
Sistema Profissional de Agendamento para Barbearias

BarberPro é uma aplicação web para agendamento online de serviços de barbearia, com integração automática via WhatsApp e validação de conflitos de horário no backend.

Projeto desenvolvido com arquitetura separada (frontend + backend) visando escalabilidade futura para modelo SaaS.

📌 Visão Geral

O sistema permite que clientes:

Selecionem barbeiro

Escolham serviço

Definam data e horário

Visualizem um resumo do agendamento

Enviem automaticamente o comprovante via WhatsApp

O backend valida conflitos de horário antes de registrar o agendamento no banco de dados.

🏗️ Arquitetura

Aplicação dividida em duas camadas:

Frontend: Interface interativa e responsiva

Backend: API REST com validação e persistência no banco MySQL

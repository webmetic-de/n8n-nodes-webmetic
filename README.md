# n8n-nodes-webmetic

🇩🇪 **Deutsch** | 🇬🇧 [English](#english)

## Deutsch

Dies ist ein n8n Community Node, mit dem Sie Webmetic in Ihren n8n Workflows verwenden können.

[Webmetic](https://webmetic.de) bietet Unternehmensbesucher-Tracking-Daten für Vertriebs- und Marketingteams.

[n8n](https://n8n.io/) ist eine [Fair-Code lizenzierte](https://docs.n8n.io/reference/license/) Workflow-Automatisierungsplattform.

[Installation](#installation-de)  
[Operationen](#operationen)  
[Zugangsdaten](#zugangsdaten)  
[Kompatibilität](#kompatibilität)  
[Verwendung](#verwendung)  
[Ressourcen](#ressourcen)

---

## English

This is an n8n community node that lets you use Webmetic in your n8n workflows.

[Webmetic](https://webmetic.de) provides company visitor tracking data for sales and marketing teams.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources-en)  

## Installation {#installation-de}

Folgen Sie der [Installationsanleitung](https://docs.n8n.io/integrations/community-nodes/installation/) in der n8n Community Nodes Dokumentation.

## Operationen

* **Neue Besuche**
  * Abrufen: Ruft eine Liste von Unternehmen ab, die eine bestimmte Domain zum ersten Mal besucht haben

## Zugangsdaten

Um diesen Node zu verwenden, benötigen Sie:

1. Einen Webmetic API-Schlüssel - Erhalten Sie Ihren unter [Webmetic](https://webmetic.de)
2. Konfigurieren Sie den API-Schlüssel in den n8n-Zugangsdaten

## Kompatibilität

* Erfordert n8n Version 0.172.0 oder höher
* Getestet mit n8n Version 1.0.0+

## Verwendung

1. Fügen Sie den Webmetic-Node zu Ihrem Workflow hinzu
2. Erstellen Sie neue Webmetic API-Zugangsdaten:
   - Geben Sie Ihren API-Schlüssel ein (beginnt mit `wmtc_`)
3. Konfigurieren Sie den Node:
   - Wählen Sie "New Visits" als Ressource
   - Wählen Sie "Get" als Operation
   - Geben Sie die Domain ein, die Sie verfolgen möchten (z.B. `example.com`)
4. Führen Sie den Node aus, um neue Unternehmensbesucherdaten abzurufen

Der Node liefert wertvolle Vertriebsinformationen über Unternehmen, die Ihre Domain zum ersten Mal besuchen.

## Ressourcen

* [n8n Community Nodes Dokumentation](https://docs.n8n.io/integrations/community-nodes/)
* [Webmetic API Dokumentation](https://hub.webmetic.de/docs)

---

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

* **New Visits**
  * Get: Retrieve a list of companies that have visited a specified domain for the first time

## Credentials

To use this node, you need:

1. A Webmetic API key - Get yours from [Webmetic](https://webmetic.de)
2. Configure the API key in n8n's credentials

## Compatibility

* Requires n8n version 0.172.0 or later
* Tested with n8n version 1.0.0+

## Usage

1. Add the Webmetic node to your workflow
2. Create new Webmetic API credentials:
   - Enter your API key (starts with `wmtc_`)
3. Configure the node:
   - Select "New Visits" as the resource
   - Select "Get" as the operation
   - Enter the domain you want to track (e.g., `example.com`)
4. Execute the node to retrieve new company visitor data

The node returns valuable sales intelligence about companies visiting your domain for the first time.

## Resources {#resources-en}

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Webmetic API documentation](https://hub.webmetic.de/docs)
# Generated by Django 3.0.3 on 2020-03-12 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bases', '0005_auto_20200312_1243'),
    ]

    operations = [
        migrations.AddField(
            model_name='condicion_iva',
            name='codigo_afip',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]

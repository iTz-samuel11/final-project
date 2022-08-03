"""empty message

Revision ID: d9df684b3574
Revises: abcf2a442cc1
Create Date: 2022-08-03 01:22:49.338056

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd9df684b3574'
down_revision = 'abcf2a442cc1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('saldo', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'saldo')
    # ### end Alembic commands ###
